/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

generateExcuse = () => {
  let pronoun = ["A", "The", "My", "Our", "Your"];
  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subject = ["rabbit", "racoon", "owl", "kangaroo", "cat", "bat"];
  let subjIndex = Math.floor(Math.random() * subject.length);
  let action = [
    "run to",
    "steps on my",
    "broke my",
    "ate my",
    "burn my",
    "threw my"
  ];
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetion = [
    "skate",
    "laptop",
    "bed",
    "pen",
    "cup of coffee",
    "door",
    "food"
  ];
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let where = [
    "on the floor",
    "at the kitchen",
    "on my home",
    "on the bathroom",
    "on the yard",
    "at the apartment"
  ];
  let whereIndex = Math.floor(Math.random() * where.length);

  let excuse =
    pronoun[proIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex];
  documen.getElementById("excuse").innerHTML = excuse;
}
