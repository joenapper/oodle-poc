import React from "react";

import Container from "./";

export default {
  title: "Grid/Container",
  component: Container,
};

export const Example = () => (
  <div style={{ width: "100%", height: "100%", backgroundColor: "#0ad2a0" }}>
    <Container>
      <div style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <h1>Container</h1>
        <p>The green borders represent to margins around the component.</p>
        <p>
          This component will be used on each section of the page to keep
          margins consistent throughout.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          alias voluptatum odio excepturi nesciunt iusto repudiandae doloremque
          rerum optio consectetur neque, animi, at mollitia incidunt. Soluta,
          consectetur ducimus magnam libero sit perferendis laudantium aperiam
          nulla ipsa modi! Placeat, nam qui atque dolore neque consequuntur
          tempore odio ducimus? Nobis est consequatur quo, voluptatum temporibus
          id in quam assumenda harum ea aliquam vero reiciendis explicabo eaque
          ut ipsa eligendi repellendus quis? Iste eaque ut sapiente ratione
          quaerat id laborum quos ullam reiciendis perferendis est quod ea
          facilis necessitatibus explicabo, delectus hic quia optio fugiat
          suscipit nostrum aliquid. Deleniti quas non beatae repellat.
        </p>
      </div>
    </Container>
  </div>
);
Example.parameters = { controls: { hideNoControlsWarning: true } };
