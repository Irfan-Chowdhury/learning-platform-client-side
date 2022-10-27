import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Blog = () => {
    const {toggle} = useContext(AuthContext);

    return (
        <div className={`${!toggle ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <Header></Header>
            <div className='container mt-5'>
                <div className="accordion text-start" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <b># What is Cors?  ?</b>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <b>Cross-Origin Resource Sharing (CORS)</b>
                                <br />
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                                An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                                For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <b># Why are you using firebase? What other options do you have to implement authentication?</b>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <b>Firebase Authentication</b> <br />
                            In the present era, user authentication is one of the most important requirements for Android apps. It is essential to authenticate users, and it is much harder if we have to write all this code on our own. This is done very easily with the help of Firebase.

                            Being able to authenticate our users securely, it offers a customized experience to them based on their interests and preferences.
                            We can ensure that they have no problems accessing their private data while using our app from multiple devices.
                            Firebase Authentication provides all the server-side stuff for authenticating the user. Firebase Authentication becomes easy with SDK. It makes API easy to use.
                            Firebase Authentication also provides some user interface libraries which enable screens for us when we are logging it.
                            Firebase authentication supports authentication using a password, phone numbers, popular identity provider like Google, Facebook, and Twitter, etc.
                            We can sign in users to our app by using the FirebaseUI.
                            It handles the UI flows for signing in user with an email address and password, phone numbers, and popular providers, including Google sign-In and Facebook Login.
                            It can also handle cases like account recovery.
                            It is not required to design a UI since it is already provided for us. It means we don't have to write the activities.
                            We can also sign-in users using the Firebase Authentication SDK to integrate one or several sign-in methods into our app manually.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <b># How does the private route work?</b>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <b>Private Routes</b> <br />
                            Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                            The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

                            In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                            If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <b># What is Node? How does Node work?</b>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications. <br /><br />
                                Scalability, latency, and throughput are key performance indicators for web servers. Keeping the latency low and the throughput high while scaling up and out is not easy. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.

                                In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.

                                While spawning threads incurs less memory and CPU overhead than forking processes, it can still be inefficient. The presence of a large number of threads can cause a heavily loaded system to spend precious cycles on thread scheduling and context switching, which adds latency and imposes limits on scalability and throughput.

                                [ Also on InfoWorld: The 6 best JavaScript IDEs reviewed ]
                                Node.js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire. The callback function can handle requests with non-blocking I/O calls, and if necessary can spawn threads from a pool to execute blocking or CPU-intensive operations and to load-balance across CPU cores. Node’s approach to scaling with callback functions requires less memory to handle more connections than most competitive architectures that scale with threads, including Apache HTTP Server, the various Java application servers, IIS and ASP.NET, and Ruby on Rails.

                                Node.js turns out to be quite useful for desktop applications in addition to servers. Also note that Node applications aren’t limited to pure JavaScript. You can use any language that transpiles to JavaScript, for example TypeScript and CoffeeScript. Node.js incorporates the Google Chrome V8 JavaScript engine, which supports ECMAScript 2015 (ES6) syntax without any need for an ES6-to-ES5 transpiler such as Babel.

                                Much of Node’s utility comes from its large package library, which is accessible from the npm command. NPM, the Node package manager, is part of the standard Node.js installation, although it has its own website.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;