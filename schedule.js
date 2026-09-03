/* ===========================================================================
   CLASS SCHEDULE  —  built on the Kawananakoa Middle School bell schedule
   ---------------------------------------------------------------------------
   Open this in any plain text editor, change the lines, save, refresh.

       start time , end time , name , picture , note , days , block

   start    8:00 or 8:00 AM or 13:30. A bare 1:00-6:59 is read as afternoon.
   end      Leave it BLANK and the activity runs until the next one starts.
            Most rows below do this on purpose — it means no dead gaps on the
            board, and if you move one activity the ones around it close up.
   name     One or two words, shown in very large type.
   picture  An emoji, or img:pictures/math.png for your own symbol file.
   note     A short line under the name. Wrap it in "quotes" if it has commas.
   days     Blank = every day. Or M, Tu, W, Th, F. Quotes around a list of
            several days are tidier but not required.
   block    Only used if calendar.js defines a rotation. Not needed here —
            this school's periods are fixed by weekday, so the days column
            does the whole job.

   --------------------------------------------------------------------------
   HOW THE PERIODS MAP

   The school runs six periods on a weekly drop rotation:

                    Mon   Tue   Wed   Thu   Fri
       8:00-8:50     1     6     5     3     2
       8:55-9:45     2     1     6     4     3
       9:45-10:00        Recess, every day
      10:05-10:55     3     2     1     5     4
      11:00-11:50     4     3     2     6     5

   The first slot of the day is always Arrival, Morning Meeting and Morning
   Exercise, whatever period number it carries.

   Period 2 is specials, and specials always win — it is the prep period.
   It moves around the week, so specials land at a different time each day:
   Monday 8:55, Tuesday 10:05, Wednesday 11:00, Friday 8:15. Thursday has no
   Period 2 at all, so there are no specials that day.

   On Friday specials take the first slot, so Morning Meeting and Morning
   Exercise move to 8:55 and the Period 3 Work Block gives way.

   A campus walk follows recess every day, in the ten minutes before the
   next period starts.

   Every other slot is Work Block. The period number sits in the note so you
   can see it at a glance without the students having to read it.
   =========================================================================== */

window.SCHEDULE_CSV = `
start,  end,   name,              picture, note,                                                   days

# ---- the same every day ----
8:00,   ,      Arrival,           🎒,      Bags away say hello,
9:45,   ,      Recess,            🏃,      Outside,
9:55,   ,      Campus walk,       🚶,      Around the school,
11:20,  ,      Get ready,         🧼,      Wash hands and line up,

# ---- morning routine, Monday to Thursday (Friday is different, see below) ----
8:15,   ,      Morning Meeting,   👋,      Calendar and weather,                                   "M, Tu, W, Th"
8:30,   ,      Morning Exercise,  🤸,      ,                                                       "M, Tu, W, Th"
11:30,  ,      Lunch,             🍽️,      ,
12:30,  ,      Break,             🧩,      Sensory area,
1:00,   ,      Chores,            🧹,      Classroom jobs,
1:30,   2:00,  Departure,         🚌,      Pick up time,

# ---- Monday: periods 1, 2, 3, 4 ----
8:55,   ,      Specials,          🎨,      "Art: Tengis, Jayden — P.E.: Josiah, Nathan, Tineafi",   M
10:05,  ,      Work Block,        📚,      Period 3,                                               M
11:00,  ,      Work Block,        📚,      Period 4,                                               M

# ---- Tuesday: periods 6, 1, 2, 3 ----
8:55,   ,      Work Block,        📚,      Period 1,                                               Tu
10:05,  ,      Specials,          🎨,      "Art: Tengis, Jayden — P.E.: Josiah, Nathan, Tineafi",   Tu
11:00,  ,      Work Block,        📚,      Period 3,                                               Tu

# ---- Wednesday: periods 5, 6, 1, 2 ----
# Period 2 is 11:00-11:50, which runs into getting ready for lunch, so
# specials only get 11:00 to 11:20 here. Flagged in the chat.
8:55,   ,      Work Block,        📚,      Period 6,                                               W
10:05,  ,      Work Block,        📚,      Period 1,                                               W
11:00,  ,      Specials,          🎨,      "Art: Tengis, Jayden — P.E.: Josiah, Nathan, Tineafi",   W

# ---- Thursday: periods 3, 4, 5, 6 — no Period 2 today, so no specials ----
8:55,   ,      Work Block,        📚,      Period 4,                                               Th
10:05,  ,      Work Block,        📚,      Period 5,                                               Th
11:00,  ,      Work Block,        📚,      Period 6,                                               Th

# ---- Friday: periods 2, 3, 4, 5 — Period 2 is first, and specials win.
#      Morning Meeting and Morning Exercise slide into the 8:55 slot. ----
8:15,   ,      Specials,          🎨,      "Art: Tengis, Jayden — P.E.: Josiah, Nathan, Tineafi",   F
8:55,   ,      Morning Meeting,   👋,      Calendar and weather,                                   F
9:15,   ,      Morning Exercise,  🤸,      ,                                                       F
10:05,  ,      Work Block,        📚,      Period 4,                                               F
11:00,  ,      Work Block,        📚,      Period 5,                                               F

# ---------------------------------------------------------------------------
# Spare rows. Delete the # to switch one on.
#
# 12:30, ,     Work Block,        📚,      Period 2 make-up,                                       Th
# 8:55,  ,     Speech,            💬,      Small group,                                            "M, W, F"
# ---------------------------------------------------------------------------
`;


/* ===========================================================================
   CLASS LIST
   ---------------------------------------------------------------------------
   First names only, separated by commas. The board picks one helper per day
   and works through the whole list before anyone repeats, so it is a fair
   turn rather than a coin flip. Days off are skipped, so a Monday holiday
   does not cost anyone their turn.

   Leave it blank — window.ROSTER = ""; — and the helper line disappears.
   =========================================================================== */

window.ROSTER = "Jayden, Josiah, Nathan, Tengis, Tineafi";
window.HELPER_LABEL = "Helper today";
