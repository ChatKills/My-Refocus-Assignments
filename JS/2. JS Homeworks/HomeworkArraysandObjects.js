//  Task 1. Dish in a menu
const dishes = [
{
        dishID          : 01, 
        dishName        : "Mashed Potatoes",
        dishPrice       : 500,
        ingredients     : ['Potatoes',' 3 cloves garlic',' 1 cup Milk',' 2 tbs. Butter',' Salt'],
},
{
        dishID          : 02,
        dishName        : "Pizza",
        dishPrice       : 500,
        ingredients     : ['355 mL warm water',' 2 1/4 tsp. dry yeast',' 3 3/4 cups bread flour',' 2 tbs. virgin oil',' 2 tsp. salt']
},
{ 
        dishID          : 03,
        dishName        : "Fried Chicken",
        dishPrice       : 500,
        ingredients     : ['Chicken', ' 4 cups flour', ' 2 tsp. garlic salt',' 2 tbs. paprika',' 2 tsp. pepper' ,' 2 1/2 seasoning']    
}

]

// Task 2. A restaurant menu

const restaurantMenu = {
    restaurantName : 'Jig Jig Eat & Go',
    dishes : [01,02,03],
    displayRestaurantName : function () 
    {
        console.log(this.restaurantName);
        
    },
    displayMenu : function() {
        for (let i = 0; i < dishes.length; i++) {
            let dishMenu = dishes[i];
            console.log();
                console.log(`${dishMenu.dishName}, P${dishMenu.dishPrice}.00`);
                console.log('Contains ' + dishes[i].ingredients);
            }
    }   
    
}
restaurantMenu.displayRestaurantName();
restaurantMenu.displayMenu()



