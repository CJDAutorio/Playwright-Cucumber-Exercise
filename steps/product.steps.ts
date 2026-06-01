import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Product } from "../pages/product.page";

Then("I will add the backpack to the cart", async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then("I will click the cart button", async () => {
  await new Product(getPage()).clickCartButton();
});

Then("I will click the checkout button", async () => {
  await new Product(getPage()).clickCheckoutButton();
});

Then(
  "I will fill the checkout form as {string} {string}, {string}",
  async (firstName, lastName, zipCode) => {
    await new Product(getPage()).fillCheckoutForm(firstName, lastName, `${zipCode}`);
  },
);

Then("I will click the continue button", async () => {
  await new Product(getPage()).clickContinueButton();
});

Then("I will click the finish button", async () => {
  await new Product(getPage()).clickFinishButton();
});

Then("The checkout success container should be visible", async () => {
  await new Product(getPage()).assertSuccessContainerVisible();
});

Then("The checkout success header should read {string}", async (expectedText) => {
  await new Product(getPage()).assertSuccessHeaderCorrect(expectedText);
});

Then("The checkout success text should read {string}", async (expectedText) => {
  await new Product(getPage()).assertSuccessTextCorrect(expectedText);
});
