import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox({ food, foodList, setFoodList, index }) {
  const totalCalories = food.servings * food.calories;

  function deleteFood(index) {
    const deletedFood = [...foodList];
    deletedFood.splice(index, 1);

    setFoodList(deleteFood);
  }

  return (
    <div>
      <Col>
        <Card title={food.name}>
          <img src={food.image} width="200px" alt="" />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <strong>Total Calories: {totalCalories}</strong> kcal
          </p>
          <Button onClick={() => {}}>Delete</Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
