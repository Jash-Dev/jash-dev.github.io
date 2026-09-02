/* ===========================================================================
   SCHOOL YEAR CALENDAR
   ---------------------------------------------------------------------------
   Two jobs: it tells the board which days there is no school, and which day
   of your block rotation today is.

   Dates are always year-month-day: 2026-09-07

   Line types:

     first day, 2026-08-03            When the school year starts
     last day,  2027-05-27            When it ends. Outside these, no school.

     no school, 2026-09-07, Labor Day
     no school, 2026-10-05 to 2026-10-09, Fall Break
                                      One date, or a range using "to".
                                      The label shows on the board that day.

     cycle, A, B                      Your block rotation, in order. Could be
                                      A, B — or 1, 2, 3, 4, 5, 6 — or
                                      Blue, Gold. Leave this line out if your
                                      schedule is the same every week.
     cycle start, 2026-08-03          The first school day of the rotation.

     day, 2026-09-14, A               Force one date to a particular day of the
                                      rotation, for when an assembly or a
                                      cancellation knocks the cycle out of step.

   Weekends are always off — you don't need to list them. Days off are skipped
   when counting the rotation, so a Monday holiday does not flip your A and B
   days for the rest of the year.

   The dates below are the Hawaii State Department of Education official
   2026-2027 calendar, amended March 30, 2026. Check them against what your
   school sent home — individual campuses add their own days.
   =========================================================================== */

window.SCHOOL_CALENDAR = `
first day, 2026-08-03
last day,  2027-05-27

no school, 2026-08-21, Statehood Day
no school, 2026-09-07, Labor Day
no school, 2026-10-05 to 2026-10-09, Fall Break
no school, 2026-11-03, Election Day
no school, 2026-11-11, Veterans Day
no school, 2026-11-26, Thanksgiving
no school, 2026-11-27, School Holiday
no school, 2026-12-21 to 2027-01-01, Winter Break
no school, 2027-01-04, Teacher Work Day
no school, 2027-01-18, Martin Luther King Jr. Day
no school, 2027-02-15, Presidents Day
no school, 2027-03-15 to 2027-03-19, Spring Break
no school, 2027-03-26, Good Friday
no school, 2027-03-29, Prince Kuhio Day
no school, 2027-05-31, Memorial Day

# HIDOE sets one Institute Day during February 8-12 with no students, and the
# date is chosen per island. Add yours here once your school announces it:
# no school, 2027-02-10, Institute Day

# Your own campus days go here too:
# no school, 2026-10-16, Teacher Work Day
# no school, 2027-04-02, Parent Conferences

# ---------------------------------------------------------------------------
# BLOCK ROTATION
# Delete the # marks below and change the labels to match your school.
# ---------------------------------------------------------------------------
# cycle, A, B
# cycle start, 2026-08-03
#
# When a fire drill or a snow-in-Hawaii miracle knocks the cycle off, pin it:
# day, 2026-09-14, A
`;
