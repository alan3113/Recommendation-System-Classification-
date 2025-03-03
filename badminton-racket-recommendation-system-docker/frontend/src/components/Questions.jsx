const questions = [
  {
    id: 1,
    question: "What is your experience level?",
    options: [
      { value: "Beginner", details: "Beginners are new to the game and are learning the basic skills and rules. They focus on understanding how to play and improving their basic techniques." },
      { value: "Intermediate", details: "Intermediate players have a good grasp of the basic skills and can play with more control and consistency. They start to learn more advanced techniques and strategies." },
      { value: "Advanced", details: "Advanced players have refined their skills and can play at a high level. They have strong techniques, good game sense, and can execute complex strategies effectively." },
      { value: "Professional", details: "Professional players compete at the highest level. They have excellent skills, deep understanding of the game, and can perform under pressure. They play in tournaments and often have specialized training." }
    ]
  },
  {
    id: 2,
    question: "What is your playing style?",
    options: [
      { value: "Attacking", details: "Players with an attacking style hit hard and fast. They use powerful smashes and quick shots to win points quickly and keep their opponents on the defensive." },
      { value: "Balanced", details: "Players with a balanced style mix both attack and defense. They adapt their game based on the situation, using a variety of shots to keep their opponents guessing." },
      { value: "Defensive", details: "Players with a defensive style focus on returning shots and keeping the rally going. They aim to tire out their opponents by returning every shot and waiting for mistakes." }
    ]
  },
  {
    id: 3,
    question: "What is your budget range for a racket?",
    options: [
      { value: "Under $50", details: "Budget rackets suitable for beginners or casual play." },
      { value: "$50 - $100", details: "Mid-range rackets that offer good quality and performance for intermediate players." },
      { value: "$100 - $200", details: "High-quality rackets suitable for advanced players looking for better performance and durability." },
      { value: "Over $200", details: "Premium rackets designed for professional players, offering the best materials and technology for top performance." }
    ]
  }
];

export default questions;


// const questions = [
//     {
//       id: 1,
//       question: "What is your playing style?",
//       options: [
//         { value: "Attacking", details: "Players with an attacking style hit hard and fast. They use powerful smashes and quick shots to win points quickly and keep their opponents on the defensive." },
//         { value: "Balanced", details: "Players with a balanced style mix both attack and defense. They adapt their game based on the situation, using a variety of shots to keep their opponents guessing." },
//         { value: "Defensive", details: "Players with a defensive style focus on returning shots and keeping the rally going. They aim to tire out their opponents by returning every shot and waiting for mistakes." }
//       ]
//     },
//     {
//       id: 2,
//       question: "What is your experience level?",
//       options: [
//         { value: "Beginner", details: "Beginners are new to the game and are learning the basic skills and rules. They focus on understanding how to play and improving their basic techniques." },
//         { value: "Intermediate", details: "Intermediate players have a good grasp of the basic skills and can play with more control and consistency. They start to learn more advanced techniques and strategies." },
//         { value: "Advanced", details: "Advanced players have refined their skills and can play at a high level. They have strong techniques, good game sense, and can execute complex strategies effectively." },
//         { value: "Professional", details: "Professional players compete at the highest level. They have excellent skills, deep understanding of the game, and can perform under pressure. They play in tournaments and often have specialized training." }
//       ]
//     },
//     {
//       id: 3,
//       question: "What is your preferred racket balance?",
//       options: [
//         { value: "Head-Heavy", details: "Head-heavy rackets provide more power and are suitable for players who rely on smashes and offensive shots." },
//         { value: "Even-Balance", details: "Even-balance rackets offer a good mix of power and control, making them suitable for all-around play." },
//         { value: "Head-Light", details: "Head-light rackets offer better control and maneuverability, making them ideal for defensive players and those who prefer quick net play." }
//       ]
//     },
//     {
//       id: 4,
//       question: "What is your preferred racket flexibility?",
//       options: [
//         { value: "Stiff", details: "Stiff rackets provide more control and are suitable for players with a fast swing speed and good technique." },
//         { value: "Medium", details: "Medium flex rackets offer a balance between power and control, making them suitable for intermediate players." },
//         { value: "Flexible", details: "Flexible rackets provide more power and are easier on the arm, making them suitable for beginners and players with a slower swing speed." }
//       ]
//     },
//     {
//       id: 5,
//       question: "What is your budget range for a racket?",
//       options: [
//         { value: "Under $50", details: "Budget rackets suitable for beginners or casual play." },
//         { value: "$50 - $100", details: "Mid-range rackets that offer good quality and performance for intermediate players." },
//         { value: "$100 - $200", details: "High-quality rackets suitable for advanced players looking for better performance and durability." },
//         { value: "Over $200", details: "Premium rackets designed for professional players, offering the best materials and technology for top performance." }
//       ]
//     },
//     {
//         id: 6,
//         question: "Do you prefer a specific brand for your racket?",
//         options: [
//           { value: "Yonex", details: "Yonex is known for its high-quality rackets used by many professional players." },
//           { value: "Victor", details: "Victor offers a wide range of rackets known for their durability and performance." },
//           { value: "Li-Ning", details: "Li-Ning provides innovative designs and is popular among top players." },
//           { value: "Other", details: "Choose this if you have a different preferred brand or are open to any brand." },
//           { value: "No Preference", details: "You are open to any brand as long as the racket suits your needs." }
//         ]
//       },
//       {
//         id: 7,
//         question: "How often do you play badminton?",
//         options: [
//           { value: "Occasionally", details: "You play badminton occasionally for fun or exercise." },
//           { value: "Weekly", details: "You play badminton regularly, about once or twice a week." },
//           { value: "Several Times a Week", details: "You play badminton several times a week and are more committed to the sport." },
//           { value: "Daily", details: "You play badminton daily and are highly dedicated to improving your skills." }
//         ]
//       },
//       {
//         id: 8,
//         question: "What type of string tension do you prefer?",
//         options: [
//           { value: "Low Tension (17-20 lbs)", details: "Low tension provides more power and is easier on the arm, suitable for beginners." },
//           { value: "Medium Tension (20-24 lbs)", details: "Medium tension offers a balance of power and control, suitable for intermediate players." },
//           { value: "High Tension (24-28 lbs)", details: "High tension provides more control and is preferred by advanced players with strong techniques." },
//           { value: "Very High Tension (28+ lbs)", details: "Very high tension is used by professional players for maximum control and precision." }
//         ]
//       },
//       {
//         id: 9,
//         question: "What is your grip size preference?",
//         options: [
//           { value: "Small (G5)", details: "Small grip sizes are suitable for players with smaller hands or those who prefer a tighter grip." },
//           { value: "Medium (G4)", details: "Medium grip sizes offer a balance between comfort and control, suitable for most players." },
//           { value: "Large (G3)", details: "Large grip sizes provide more comfort for players with larger hands or those who prefer a looser grip." },
//           { value: "No Preference", details: "You are open to any grip size as long as it feels comfortable in your hand." }
//         ]
//       },
//       {
//         id: 10,
//         question: "Do you have any preferences for racket weight?",
//         options: [
//           { value: "Lightweight (5U, 75-80g)", details: "Lightweight rackets are easier to handle and provide quicker maneuverability." },
//           { value: "Medium Weight (4U, 80-85g)", details: "Medium weight rackets offer a balance between power and control." },
//           { value: "Heavyweight (3U, 85-90g)", details: "Heavyweight rackets provide more power and stability but may be harder to maneuver." },
//           { value: "Very Heavyweight (2U, 90-95g)", details: "Very heavyweight rackets are for players who prefer maximum power and can handle the extra weight." }
//         ]
//       },
//       {
//         id: 11,
//         question: "Do you play more singles or doubles?",
//         options: [
//           { value: "Singles", details: "Rackets for singles tend to be more balanced or head-heavy for power and control." },
//           { value: "Doubles", details: "Rackets for doubles are often lighter and more maneuverable for quick reactions at the net." },
//           { value: "Both Equally", details: "You play both singles and doubles, so a versatile racket would be suitable." }
//         ]
//       }
//     ];
    
//     export default questions;
