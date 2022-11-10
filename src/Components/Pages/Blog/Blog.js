import React from 'react';
import Table from 'react-bootstrap/Table';
import useTitle from '../../Title/useTitle';
import img from './jwt.PNG'
import './Blog.css'

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='container mt-4'>
            <div >
                <h2>Question 1 : What is the difference between SQL and NoSQL ?</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.</td>
                            <td>The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. </td>
                            <td>NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.</td>
                            <td>NoSQL databases need not stick to this format, but generally fit into one of four broad categories:
                                <ul>
                                    <li>Column-oriented databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.</li>
                                    <li>Key-Value stores are dictionaries which access diverse objects with a key unique to each.</li>
                                    <li>Document stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely different from each other.</li>
                                    <li>Graph databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:
                                <ul>
                                    <li>Atomicity means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.</li>
                                    <li>Consistency means that at each step the database follows invariants: rules which validate and prevent corruption.</li>
                                    <li>Isolation prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.</li>
                                    <li>Durability makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.</li>
                                </ul>
                            </td>
                            <td>NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:
                                <ul>
                                    <li>Consistency: Every request receives the most recent result, or an error. (Note this is different than in ACID)</li>
                                    <li>Availability: Every request has a non-error result, regardless of how recent that result is.</li>
                                    <li>Partition tolerance: Any delays or losses between nodes will not interrupt the system’s operation.</li>
                                </ul>
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <h2>Question 2 : What is JWT, and how does it work?</h2>

                <p>JWT : JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>

                <h6>How it work</h6>
                <p>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                    <br />
                    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>

                <h5>Structure of JWT</h5>
                <img className='jwt-image' src={img} alt="" />
                <h6>Header</h6>
                <p>JWT header consists of token type and algorithm used for signing and encoding. Algorithms can be HMAC, SHA256, RSA, HS256 or RS256.</p>

                <h6>Payload</h6>
                <p>Payload consists of the session data called as claims. Below are some of the the standard claims that we can use,
                    <ol>
                        <li>Issuer(iss)</li>
                        <li>Subject (sub)</li>
                        <li>Audience (aud)</li>
                        <li>Expiration time (exp)</li>
                        <li>Issued at (iat)</li>
                    </ol>
                </p>
                <h6>Signature</h6>
                <p>Signature is most important part of a JSON Web Token(JWT). Signature is calculated by encoding the header and payload using Base64url Encoding and concatenating them with a period separator. Which is then given to the cryptographic algorithm.</p>

            </div>
            <div>
                <h2>Question 3 : What is the difference between javascript and NodeJS ? </h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>javascript</th>
                            <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                            <td>Nodejs does not have capability to add HTML tags.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                            <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.  </td>
                            <td>Nodejs is written in C, C++ and Javascript. </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <h2>Question 4 : How does NodeJS handle multiple requests at the same time ? </h2>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

            </div>
        </div>
    );
};

export default Blog;