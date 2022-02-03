import { DUMMY_MEALS } from './dummy-meals';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} {...meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;