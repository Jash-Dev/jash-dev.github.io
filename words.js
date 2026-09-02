/* ===========================================================================
   WORD OF THE DAY + WORD BANK
   ---------------------------------------------------------------------------
   One word per line:

       word , picture , sentence , group

   word      What the class is learning. One word, or two short ones.
   picture   An emoji, or img:pictures/help.png to use your own symbol.
   sentence  A short model sentence using the word. Keep it four to six words.
   group     core, action, thing, feeling, greeting — or make up your own.
             The word bank fills with other words from the SAME group, so the
             choice is a real discrimination and not an obvious one.

   The board works through this list one word per school day and starts over
   when it reaches the end. Repeats are the point — a forty word list cycles
   about four times a year, which is closer to the repetition these goals ask
   for than a new word every day would be.

   HOW MANY CHOICES: set WORD_BANK_SIZE below to 2, 3, 4, 6, or 8 to match the
   size of array the student is working on. Start small and grow it.

   Tile positions stay put all day. That is deliberate — students who navigate
   an AAC device by motor memory should not have the target move on them.
   =========================================================================== */

window.WORD_BANK_SIZE = 6;

window.WORD_LIST = `
word,        picture, sentence,                     group

# ---- core words: the ones that unlock the most, and the ones the AAC
#      devices in this room are built around ----
more,        ➕,      I want more.,                 core
help,        🙋,      I need help.,                 core
break,       🧩,      I need a break.,              core
stop,        🛑,      Please stop.,                 core
go,          ➡️,      It is time to go.,            core
want,        🤲,      I want a snack.,              core
all done,    ✅,      I am all done.,               core
yes,         👍,      Yes please.,                  core
no,          👎,      No thank you.,                core
look,        👀,      Look at me.,                  core
turn,        🔁,      It is my turn.,               core
wait,        ⏳,      I can wait.,                  core

# ---- actions ----
eat,         🍴,      I eat my lunch.,              action
drink,       🥤,      I drink water.,               action
sit,         🪑,      I sit down.,                  action
stand,       🧍,      I stand up.,                  action
walk,        🚶,      We walk in line.,             action
wash,        🧼,      I wash my hands.,             action
open,        🔓,      Open the box.,                action
give,        🤝,      I give it to you.,            action
read,        📖,      I read a book.,               action
write,       ✏️,      I write my name.,             action
listen,      👂,      I listen to my teacher.,      action

# ---- things in our room ----
backpack,    🎒,      My backpack is here.,         thing
chair,       💺,      I sit on my chair.,           thing
book,        📚,      I want that book.,            thing
pencil,      🖍️,      I need a pencil.,             thing
paper,       📄,      Give me some paper.,          thing
cup,         🥛,      My cup is full.,              thing
water,       💧,      I want water.,                thing
snack,       🍎,      It is snack time.,            thing
bathroom,    🚻,      I need the bathroom.,         thing
towel,       🧻,      I dry with a towel.,          thing
shoes,       👟,      I put on my shoes.,           thing
jacket,      🧥,      I wear my jacket.,            thing

# ---- feelings ----
happy,       😀,      I feel happy.,                feeling
sad,         😢,      I feel sad.,                  feeling
tired,       😴,      I feel tired.,                feeling
mad,         😠,      I feel mad.,                  feeling
calm,        😌,      I feel calm.,                 feeling
sick,        🤒,      I feel sick.,                 feeling
scared,      😨,      I feel scared.,               feeling

# ---- greetings and manners ----
hello,       👋,      Hello. How are you?,          greeting
goodbye,     ✌️,      Goodbye. See you tomorrow.,   greeting
please,      🙏,      Can I have it please?,        greeting
thank you,   💛,      Thank you for helping.,       greeting
sorry,       😔,      I am sorry.,                  greeting
excuse me,   🙇,      Excuse me please.,            greeting
`;
