/* ===========================================================================
   LUNCH MENU
   ---------------------------------------------------------------------------
   YOU ALREADY HAVE THIS FILE. Keep the one in your repo — it has your real
   menus in it. This copy is only here so the folder is complete, and so the
   format is written down somewhere.

   Both the morning board and the Calendar tab read this one file, so a menu
   is typed once.
   ---------------------------------------------------------------------------

   One line per day. The date comes first, then the food. Use as many commas
   as you like — everything after the date is the menu, and each item becomes
   its own line on the day card:

       2026-11-09, Chicken Katsu, Rice, Green Beans, Pineapple

   Dates are year-month-day, so 11/9 is 2026-11-09.

   If a meal repeats on the same weekday every week, name the day instead of
   a date. A specific date always beats a weekday line:

       Friday, Cheese Pizza, Green Salad, Fruit

   The "default" line is used when nothing else matches. It shows on the day
   card, but not in the month grid — otherwise every blank weekday of the
   month would read "Check the cafeteria menu".

   A line starting with # is ignored, so you can comment one out instead of
   deleting it.

   Keep the backtick marks ( ` ) above and below the list.
   =========================================================================== */

window.LUNCH_MENU = `

# ---- replace everything in here with your real menus ----
2026-11-09, Chicken Katsu, Rice, Green Beans, Pineapple
2026-11-10, Beef Stew, Brown Rice, Tossed Salad, Orange
2026-11-12, Shoyu Chicken, Rice, Corn, Apple
2026-11-13, Cheese Pizza, Tossed Salad, Watermelon

# ---- or, if the menu is the same every week, use these instead of dates ----
# Monday,    Chicken Katsu, Rice, Green Beans, Fruit
# Tuesday,   Beef Stew, Rice, Salad, Fruit
# Wednesday, Shoyu Chicken, Rice, Corn, Fruit
# Thursday,  Spaghetti, Garlic Bread, Carrots, Fruit
# Friday,    Cheese Pizza, Salad, Fruit

default, Check the cafeteria menu
`;
