/* ===========================================================================
   LUNCH MENU
   ---------------------------------------------------------------------------
   One line per day. The date comes first, and everything after it is the menu,
   so you can use as many commas as you like:

       2026-09-02, Chicken adobo, rice, corn, fruit

   If your menu repeats on the same weekday every week, name the day instead
   of a date:

       Friday, Pizza, salad, fruit

   A specific date always wins over a weekday line. If neither matches, the
   "default" line is used. Delete the default line and the board simply says
   nothing about lunch that day.

   Lines starting with # are ignored.

   The board shows this two ways: a small note in the top bar all morning, and
   under the word Lunch on the big card when lunch is next.
   =========================================================================== */

window.LUNCH_MENU = `
# ---- this week ----
2026-09-08, Pasta Florentine, Chicken Ceasar Salad, Green Salad, Diced Tomatoes, Cucumbers, Orange Wedge
2026-09-09, Chili Cheese Nachos, Bean Volcano Bowl, Green Salad, Local Salsa, Refried Beans, Strawberry Kiwi Juice
2026-09-10, Hot Dog w/ Bun, Chinese Chicken Salad, Tater Tots, Roasted Kabocha, Cucumber, Apple Wedges
2026-09-11, Kalua Pork Sandwich, Pasta Salad, Baby Carrots, Cucumber, Sweet Potato Mash, Apple Blueberry Crunch



default, Check the cafeteria menu
`;
