// const mercadopago = new MercadoPago("TEST-3879683763947909-062811-e9ff9f8f84f5c39d4311b92e224afb98-1409997996", {
//   locale: "es-AR", // The most common are: 'pt-BR', 'es-AR' and 'en-US'
// });

// document.getElementById("checkout-btn").addEventListener("click", function () {
//     const orderData = {
//       title: document.getElementById("title").innerHTML,
//       unit_price: parseInt(document.getElementById("unit-price").innerHTML, 10),
//       contentHTML: document.getElementById("myDiv").innerHTML,
//     };
    
//     console.log(orderData.contentHTML);

//     fetch("http://localhost:3000/create-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderData),
//     })
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (preference) {
//         createCheckoutButton(preference.id);
//       })
//       .catch(function () {
//         alert("Unexpected error");
//       });
//   });

//   function createCheckoutButton(preferenceId) {
//     // Initialize the checkout
//     const bricksBuilder = mercadopago.bricks();

//     const renderComponent = async (bricksBuilder) => {
//       if (window.checkoutButton) window.checkoutButton.unmount();
//       await bricksBuilder.create(
//         "wallet",
//         "button-checkout", // class/id where the payment button will be displayed
//         {
//           initialization: {
//             preferenceId: preferenceId,
//           },
//           callbacks: {
//             onError: (error) => console.error(error),
//             onReady: () => {},
//           },
//         }
//       );
//     };
//     window.checkoutButton = renderComponent(bricksBuilder);
//   }

