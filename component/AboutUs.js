import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="ml-48 image object-center text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5IsH1PRP3HFz8nUnrcp7P7DFGViBUnQw0ZA&s" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              Welcome to Foodie Faster, your premier destination for convenient
              and delicious online food delivery. At Foodie Faster, we believe
              in bringing the joy of exceptional dining experiences directly to
              your doorstep. Whether you're craving gourmet cuisine, comforting
              classics, or exploring new flavors, our platform connects you with
              a diverse selection of restaurants and eateries. Founded with a
              passion for quality and convenience, Foodie Faster strives to
              redefine how you enjoy food. We partner with local favorites and
              top-rated establishments to offer a wide array of options that
              cater to every palate and preference. Our user-friendly interface
              ensures seamless browsing, ordering, and delivery, making your
              culinary journey effortless and enjoyable. Driven by a commitment
              to customer satisfaction, Foodie Faster prioritizes reliability
              and efficiency in every interaction. From prompt deliveries to
              attentive customer support, we aim to exceed your expectations
              with every meal. Whether it's a quick bite, a family dinner, or a
              special occasion, trust Foodie Faster to deliver exceptional food
              experiences, right to your doorstep. Join us in discovering a
              world of flavors, convenience, and culinary delights. Experience
              the ease of ordering food online with Foodie Faster today! Foodie
              Faster - Where great food meets your doorstep.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
