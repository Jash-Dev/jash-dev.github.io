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
2026-08-31, Chicken katsu, rice, green beans, pineapple
2026-09-01, Beef stew, brown rice, tossed salad, orange
2026-09-02, Honey Ginger Chicken/Tofu, Hapa Rice, Protein Pack, Edamame, Steamed Carrots, Apple Slices.
2026-09-03, Loco Moco w/ Ulu Gravy, Hapa Rice, Protein Pack, Edamame, Steamed Carrots, Apple Slices
#2026-09-04, Cheese pizza, salad, watermelon



default, Check the cafeteria menu
`;
