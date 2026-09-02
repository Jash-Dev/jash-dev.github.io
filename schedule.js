/* ===========================================================================
   CLASS SCHEDULE
   ---------------------------------------------------------------------------
   This is the file to edit. Open it in any plain text editor — Notepad on
   Windows, TextEdit on Mac, or the built-in editor on a Chromebook — change
   the lines below, save, and refresh the board.

   Keep the backtick marks ( ` ) at the top and bottom. Everything between
   them is your schedule, one activity per line:

       start time , end time , name , picture , note , days , block

   start    When it begins.  8:00 or 8:00 AM or 13:30 all work.
            A bare 1:00 through 6:59 is read as afternoon.
   end      When it ends. Leave it blank and it runs until the next activity.
   name     One or two words. This shows in very large type.
   picture  An emoji, or img:pictures/math.png to use your own symbol file.
   note     A short line under the name. Optional. If it contains a comma,
            wrap the whole note in "quotes".
   days     Leave blank for every day. Or list days: M, Tu, W, Th, F.
   block    Leave blank unless your school runs a block rotation. If it does,
            put the rotation label here — A, B, 1, 2, Blue, Gold — and the row
            only shows on those days. The rotation itself is set up in
            calendar.js.

   A line starting with # is ignored, so you can park spare activities here
   without deleting them.
   =========================================================================== */

window.SCHEDULE_CSV = `
start,  end,    name,         picture, note,                          days,  block
8:00,   8:20,   Arrival,      🎒,      Bags away say hello,
8:20,   9:00,   Meeting,      👋,      Calendar and weather,
9:00,   9:30,   Reading,      📖,      ,
9:30,   9:45,   Break,        🧩,      Sensory area,
9:45,   10:45,  Math,         🔢,      ,
10:45,  11:05,  Snack,        🍎,      Snack and bathroom,
11:05,  11:40,  Writing,      ✏️,      ,
11:40,  12:15,  Lunch,        🍽️,      ,
12:15,  12:45,  Recess,       ⚽,      Outside,
12:45,  1:30,   Life skills,  🧺,      "Cooking, laundry, hygiene",
1:30,   1:45,   Break,        🧩,      Sensory area,
1:45,   2:25,   Work skills,  🧰,      Job tasks,
2:25,   2:50,   Pack up,      👋,      Bags jobs goodbye,

# ---------------------------------------------------------------------------
# Days that are different from the rest of the week go in the same list, with
# the days named in the last column. Delete the # to switch these on, and
# remove or shorten whatever they overlap.
#
# 1:45,  2:25,   Music,        🎵,      With Ms. Lee,                  Tu
# 1:45,  2:25,   P.E.,         ⚽,      Gym,                           Th
# 9:00,  9:30,   Speech,       💬,      Small group,                   M, W, F
#
# And if your school runs a block rotation, the day the period lands on goes
# in the last column. These two rows put a different period first depending
# on whether it is an A day or a B day:
#
# 8:20,  9:50,   Period 1,     📘,      ,                              ,      A
# 8:20,  9:50,   Period 3,     📗,      ,                              ,      B
# ---------------------------------------------------------------------------
`;


/* ===========================================================================
   CLASS LIST
   ---------------------------------------------------------------------------
   First names only, separated by commas. The board picks one helper per day
   and works through the whole list before anyone repeats, so it is a fair
   turn rather than a true coin flip. Days off are skipped, so a Monday
   holiday does not cost anyone their turn.

   Leave this blank — window.ROSTER = ""; — and the helper line disappears
   from the board entirely.

   Change HELPER_LABEL to whatever your class calls the job: Helper today,
   Line leader, Star student, Kokua of the day.
   =========================================================================== */

window.ROSTER = "Jayden, Josiah, Nathan, Tengis, Tineafi";
window.HELPER_LABEL = "Helper today";
