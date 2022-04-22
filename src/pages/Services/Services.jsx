import React, { forwardRef, useRef } from "react";
import './services.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

function Services() {

    return (
        <>
            {/* <Outlet /> */}

            <section className="section-services" id="services">
                {/* <div className="header-nav-wrap"> */}
                <div className="container">
                    <h1>SERVICES</h1>
                    <div className="services">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate totam quidem sit fuga vero animi perspiciatis fugit saepe, amet nulla harum odit, unde ab? Pariatur, placeat corrupti error quibusdam recusandae eveniet quo ut facere autem, dolores eos consectetur necessitatibus a harum possimus, tempore nemo adipisci earum odio libero exercitationem amet. Necessitatibus mollitia error debitis cum nemo esse autem laudantium sed a fuga cumque magni vero natus ipsa deserunt assumenda ad, corporis, fugiat aliquam. Totam a fugit alias? Sequi atque tempore officiis velit dignissimos maxime laudantium, perspiciatis, qui porro possimus, exercitationem officia minus vero inventore dolore eligendi aut laborum. Porro odit natus sit libero. Placeat nam suscipit dignissimos illo, officiis, nisi dolorem magni asperiores, quis impedit expedita temporibus officia repellendus soluta eum! Quas, nemo dicta est repellat eveniet expedita quasi tenetur! Doloremque iste expedita ab culpa magni quia quos libero animi mollitia, sed similique ut alias sunt nisi quibusdam placeat delectus ratione repudiandae. Quam aspernatur hic cumque aut eveniet et dolor in pariatur quis perferendis natus nemo, nihil itaque exercitationem voluptates voluptatum sunt ea ipsam amet alias numquam quos a nulla repellat. Repudiandae sapiente est magni ab rerum cumque eaque laborum ad quia nulla voluptate, quas odio quisquam maiores fugiat dignissimos.
                        </p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate totam quidem sit fuga vero animi perspiciatis fugit saepe, amet nulla harum odit, unde ab? Pariatur, placeat corrupti error quibusdam recusandae eveniet quo ut facere autem, dolores eos consectetur necessitatibus a harum possimus, tempore nemo adipisci earum odio libero exercitationem amet. Necessitatibus mollitia error debitis cum nemo esse autem laudantium sed a fuga cumque magni vero natus ipsa deserunt assumenda ad, corporis, fugiat aliquam. Totam a fugit alias? Sequi atque tempore officiis velit dignissimos maxime laudantium, perspiciatis, qui porro possimus, exercitationem officia minus vero inventore dolore eligendi aut laborum. Porro odit natus sit libero. Placeat nam suscipit dignissimos illo, officiis, nisi dolorem magni asperiores, quis impedit expedita temporibus officia repellendus soluta eum! Quas, nemo dicta est repellat eveniet expedita quasi tenetur! Doloremque iste expedita ab culpa magni quia quos libero animi mollitia, sed similique ut alias sunt nisi quibusdam placeat delectus ratione repudiandae. Quam aspernatur hic cumque aut eveniet et dolor in pariatur quis perferendis natus nemo, nihil itaque exercitationem voluptates voluptatum sunt ea ipsam amet alias numquam quos a nulla repellat. Repudiandae sapiente est magni ab rerum cumque eaque laborum ad quia nulla voluptate, quas odio quisquam maiores fugiat dignissimos.
                        </p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate totam quidem sit fuga vero animi perspiciatis fugit saepe, amet nulla harum odit, unde ab? Pariatur, placeat corrupti error quibusdam recusandae eveniet quo ut facere autem, dolores eos consectetur necessitatibus a harum possimus, tempore nemo adipisci earum odio libero exercitationem amet. Necessitatibus mollitia error debitis cum nemo esse autem laudantium sed a fuga cumque magni vero natus ipsa deserunt assumenda ad, corporis, fugiat aliquam. Totam a fugit alias? Sequi atque tempore officiis velit dignissimos maxime laudantium, perspiciatis, qui porro possimus, exercitationem officia minus vero inventore dolore eligendi aut laborum. Porro odit natus sit libero. Placeat nam suscipit dignissimos illo, officiis, nisi dolorem magni asperiores, quis impedit expedita temporibus officia repellendus soluta eum! Quas, nemo dicta est repellat eveniet expedita quasi tenetur! Doloremque iste expedita ab culpa magni quia quos libero animi mollitia, sed similique ut alias sunt nisi quibusdam placeat delectus ratione repudiandae. Quam aspernatur hic cumque aut eveniet et dolor in pariatur quis perferendis natus nemo, nihil itaque exercitationem voluptates voluptatum sunt ea ipsam amet alias numquam quos a nulla repellat. Repudiandae sapiente est magni ab rerum cumque eaque laborum ad quia nulla voluptate, quas odio quisquam maiores fugiat dignissimos.
                        </p>
                    </div>
                    {/* </div> */}
                </div>

            </section>
        </>
    )
}

export default Services;