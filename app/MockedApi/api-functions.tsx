type Restaurant = {
    id: number;
    name: string;
    location: string;
    rating: number;
    estimated_budget: number; 
    partner_property: string;
    payment_id: string;
  };
  
  const getRestaurants = (): Restaurant[] => {
    const restaurants: Restaurant[] = [
      { id: 1, name: 'Bistro Central', location: 'Downtown', rating: 4.5, estimated_budget: 100, partner_property: 'Bistro Group', payment_id: 'pay_001' },
      { id: 2, name: 'La Piazza', location: 'City Center', rating: 4.2, estimated_budget: 150, partner_property: 'Italian Eats Ltd.', payment_id: 'pay_002' },
      { id: 3, name: 'Sushi Zen', location: 'Chinatown', rating: 4.7, estimated_budget: 200, partner_property: 'Zen Group', payment_id: 'pay_003' },
      { id: 4, name: 'Taco Fiesta', location: 'Old Town', rating: 4.0, estimated_budget: 50, partner_property: 'Fiesta Partners', payment_id: 'pay_004' },
      { id: 5, name: 'Grill Master', location: 'Market Square', rating: 4.1, estimated_budget: 100, partner_property: 'Grill House Inc.', payment_id: 'pay_005' },
      { id: 6, name: 'Ocean’s Delight', location: 'Beachside', rating: 4.6, estimated_budget: 150, partner_property: 'Ocean Eats', payment_id: 'pay_006' },
      { id: 7, name: 'Café Paris', location: 'Broadway Street', rating: 4.8, estimated_budget: 150, partner_property: 'Paris Café LLC', payment_id: 'pay_007' },
      { id: 8, name: 'Burger Palace', location: 'Uptown', rating: 3.9, estimated_budget: 50, partner_property: 'Fast Foods Inc.', payment_id: 'pay_008' },
      { id: 9, name: 'Indian Spice', location: 'East End', rating: 4.5, estimated_budget: 100, partner_property: 'Spice World', payment_id: 'pay_009' },
      { id: 10, name: 'Pizza Planet', location: 'West End', rating: 4.3, estimated_budget: 100, partner_property: 'Planet Foods', payment_id: 'pay_010' },
      { id: 11, name: 'Healthy Greens', location: 'City Park', rating: 4.4, estimated_budget: 100, partner_property: 'Green Foods Corp.', payment_id: 'pay_011' },
      { id: 12, name: 'Steakhouse Royale', location: 'Lakeside', rating: 4.9, estimated_budget: 200, partner_property: 'Royale Dining Ltd.', payment_id: 'pay_012' },
      { id: 13, name: 'Thai Delight', location: 'South Beach', rating: 4.5, estimated_budget: 100, partner_property: 'Delight Partners', payment_id: 'pay_013' },
      { id: 14, name: 'Pasta House', location: 'North Plaza', rating: 4.1, estimated_budget: 150, partner_property: 'Pasta Group', payment_id: 'pay_014' },
      { id: 15, name: 'BBQ Smokehouse', location: 'Downtown', rating: 4.3, estimated_budget: 150, partner_property: 'BBQ Co.', payment_id: 'pay_015' },
      { id: 16, name: 'Vegan Paradise', location: 'Eco Park', rating: 4.6, estimated_budget: 100, partner_property: 'Vegan World', payment_id: 'pay_016' },
      { id: 17, name: 'French Bistro', location: 'Old Town', rating: 4.4, estimated_budget: 150, partner_property: 'Bistro Group', payment_id: 'pay_017' },
      { id: 18, name: 'Sushi Express', location: 'City Center', rating: 4.2, estimated_budget: 100, partner_property: 'Zen Group', payment_id: 'pay_018' },
      { id: 19, name: 'Burger Hub', location: 'Suburb', rating: 3.8, estimated_budget: 50, partner_property: 'Fast Foods Inc.', payment_id: 'pay_019' },
      { id: 20, name: 'Mexican Fiesta', location: 'Uptown', rating: 4.3, estimated_budget: 100, partner_property: 'Fiesta Partners', payment_id: 'pay_020' },
      { id: 21, name: 'Gourmet Grills', location: 'Riverside', rating: 4.7, estimated_budget: 150, partner_property: 'Grill House Inc.', payment_id: 'pay_021' },
      { id: 22, name: 'Italiano Café', location: 'Central Park', rating: 4.5, estimated_budget: 150, partner_property: 'Italian Eats Ltd.', payment_id: 'pay_022' },
      { id: 23, name: 'Tropical Tastes', location: 'Beachside', rating: 4.2, estimated_budget: 100, partner_property: 'Ocean Eats', payment_id: 'pay_023' },
      { id: 24, name: 'Pizza King', location: 'Market Square', rating: 3.9, estimated_budget: 50, partner_property: 'Planet Foods', payment_id: 'pay_024' },
      { id: 25, name: 'Steak & Seafood', location: 'Harbor Bay', rating: 4.8, estimated_budget: 200, partner_property: 'Royale Dining Ltd.', payment_id: 'pay_025' },
      { id: 26, name: 'Asian Fusion', location: 'Lakeside', rating: 4.6, estimated_budget: 150, partner_property: 'Fusion Foods LLC', payment_id: 'pay_026' },
      { id: 27, name: 'BBQ Pit', location: 'Countryside', rating: 4.1, estimated_budget: 100, partner_property: 'BBQ Co.', payment_id: 'pay_027' },
      { id: 28, name: 'Sushi World', location: 'Old Town', rating: 4.9, estimated_budget: 200, partner_property: 'Zen Group', payment_id: 'pay_028' },
      { id: 29, name: 'Italian Bistro', location: 'City Center', rating: 4.4, estimated_budget: 150, partner_property: 'Italian Eats Ltd.', payment_id: 'pay_029' },
      { id: 30, name: 'Burger Barn', location: 'Suburb', rating: 3.7, estimated_budget: 50, partner_property: 'Fast Foods Inc.', payment_id: 'pay_030' }
    ];
  
    return restaurants;
  };
  
  export default getRestaurants;
  