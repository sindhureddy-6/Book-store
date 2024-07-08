import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { generateClient } from 'aws-amplify/api';
import { uploadData, downloadData } from 'aws-amplify/storage';
import { Authenticator} from '@aws-amplify/ui-react';
import {Amplify} from 'aws-amplify';
import { createBook } from '../api/mutations'
import config from '../aws-exports'

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config
const client = generateClient();

const Admin = () => {
    const [image, setImage] = useState(null);
    const [bookDetails, setBookDetails] = useState({ title: "", description: "", image: "", author: "", price: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!bookDetails.title || !bookDetails.price) return
            await client.graphql({
              query: createBook,
              variables: {
             input: bookDetails
             }
            });
            console.log("book created!!!!");
            setBookDetails({ title: "", description: "", image: "", author: "", price: "" })
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }
   

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level. 
        const operation = uploadData({
              path: key,
              data: file,
              options: {
                level: 'public',
                contentType: file.type
        }
        });
         await operation.result;
            // Retrieve the uploaded file to display
            const { data } = await downloadData({ path: key, options: { level: 'public' } }).result;
            console.log("getting data from bucket");
            console.log(data);
            setImage(data);
            setBookDetails({ ...bookDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }

    return (
    <section className="admin-wrapper">
      <Authenticator>
        {({ signOut }) => (
          <section>
            <header className="form-header">
              <h3>Add New Book</h3>
              <button onClick={signOut}>Sign out</button>
            </header>
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <div className="form-image">
                {image ? (
                  <img className="image-preview" src={image} alt="Preview" />
                ) : (
                  <input
                    type="file"
                    accept="image/jpg"
                    onChange={handleImageUpload}
                  />
                )}
              </div>
              <div className="form-fields">
                <div className="title-form">
                  <p>
                    <label htmlFor="title">Title</label>
                  </p>
                  <p>
                    <input
                      name="title"
                      type="text"
                      value={bookDetails.title}
                      placeholder="Type the title"
                      onChange={(e) =>
                        setBookDetails({ ...bookDetails, title: e.target.value })
                      }
                      required
                    />
                  </p>
                </div>
                <div className="description-form">
                  <p>
                    <label htmlFor="description">Description</label>
                  </p>
                  <p>
                    <textarea
                      name="description"
                      value={bookDetails.description}
                      rows="8"
                      placeholder="Type the description of the book"
                      onChange={(e) =>
                        setBookDetails({
                          ...bookDetails,
                          description: e.target.value
                        })
                      }
                      required
                    />
                  </p>
                </div>
                <div className="author-form">
                  <p>
                    <label htmlFor="author">Author</label>
                  </p>
                  <p>
                    <input
                      name="author"
                      type="text"
                      value={bookDetails.author}
                      placeholder="Type the author's name"
                      onChange={(e) =>
                        setBookDetails({ ...bookDetails, author: e.target.value })
                      }
                      required
                    />
                  </p>
                </div>
                <div className="price-form">
                  <p>
                    <label htmlFor="price">Price ($)</label>
                    <input
                      name="price"
                      type="text"
                      value={bookDetails.price}
                      placeholder="What is the Price of the book (USD)"
                      onChange={(e) =>
                        setBookDetails({ ...bookDetails, price: e.target.value })
                      }
                      required
                    />
                  </p>
                </div>
                <div className="featured-form">
                  <p>
                    <label>Featured?</label>
                    <input
                      type="checkbox"
                      className="featured-checkbox"
                      checked={bookDetails.featured}
                      onChange={() =>
                        setBookDetails({
                          ...bookDetails,
                          featured: !bookDetails.featured
                        })
                      }
                    />
                  </p>
                </div>
                <div className="submit-form">
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
        )}
      </Authenticator>
    </section>
  )
}

export default Admin
