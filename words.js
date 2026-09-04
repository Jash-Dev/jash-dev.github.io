/* ===========================================================================
   WORD OF THE DAY + WORD BANK
   ---------------------------------------------------------------------------
   One word per line:

       word , picture , sentence , group

   word      What the class is learning.
   picture   An emoji, or img:pictures/help.png for your own symbol.
             LEAVE IT BLANK for sight words — the tile then shows the word on
             its own, which is the point. Matching a word to a word is the
             skill; a picture would let a student answer without reading.
   sentence  A short model sentence using the word. Four to six words.
   group     The word bank fills with other words from the SAME group, so the
             choice is a real one. Sight words only compete against sight
             words at the same level.

   HOW MANY CHOICES: WORD_BANK_SIZE below takes 2, 3, 4, 6, or 8. Match it to
   the array the student is working on. Start small and grow it.

   WHICH WORDS: WORD_FOCUS below picks which groups are in rotation. Leave it
   blank for everything. Or name groups to drill one set for a few weeks:

       window.WORD_FOCUS = "sight pp";              just pre-primer
       window.WORD_FOCUS = "sight pp, sight p";     pre-primer and primer
       window.WORD_FOCUS = "core, action";          back to the AAC words

   That matters here. With everything switched on the list runs 182 words,
   which is about one school year — each word comes up once. Narrowing to one
   group brings a word back every few weeks instead, which is closer to the
   repetition these goals call for.

   Tile positions stay put all day. Students who navigate by motor memory
   should not have the target move on them.
   =========================================================================== */

window.WORD_BANK_SIZE = 6;
window.WORD_FOCUS = "";

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


# ---- PRE-PRIMER sight words (Dolch, 40) — no pictures on purpose ----
a          , , I see a cat.                , sight pp
and        , , You and me.                 , sight pp
away       , , Go away bug.                , sight pp
big        , , That is big.                , sight pp
blue       , , The sky is blue.            , sight pp
can        , , I can do it.                , sight pp
come       , , Come with me.               , sight pp
down       , , Sit down please.            , sight pp
find       , , Can you find it?            , sight pp
for        , , This is for you.            , sight pp
funny      , , That is funny.              , sight pp
go         , , It is time to go.           , sight pp
help       , , I need help.                , sight pp
here       , , Come over here.             , sight pp
I          , , I am ready.                 , sight pp
in         , , Put it in.                  , sight pp
is         , , This is mine.               , sight pp
it         , , I want it.                  , sight pp
jump       , , Watch me jump.              , sight pp
little     , , A little cat.               , sight pp
look       , , Look at me.                 , sight pp
make       , , Let us make it.             , sight pp
me         , , Give it to me.              , sight pp
my         , , That is my book.            , sight pp
not        , , It is not here.             , sight pp
one        , , I want one.                 , sight pp
play       , , Let us play.                , sight pp
red        , , The apple is red.           , sight pp
run        , , I can run fast.             , sight pp
said       , , She said hello.             , sight pp
see        , , I see you.                  , sight pp
the        , , The dog is big.             , sight pp
three      , , I have three.               , sight pp
to         , , I go to school.             , sight pp
two        , , Two more please.            , sight pp
up         , , Stand up now.               , sight pp
we         , , We are ready.               , sight pp
where      , , Where is it?                , sight pp
yellow     , , The sun is yellow.          , sight pp
you        , , How are you?                , sight pp

# ---- PRIMER sight words (Dolch, 52) ----
all        , , That is all.                , sight p
am         , , I am happy.                 , sight p
are        , , You are my friend.          , sight p
at         , , Look at this.               , sight p
ate        , , I ate my lunch.             , sight p
be         , , Be nice please.             , sight p
black      , , My shoes are black.         , sight p
brown      , , The dog is brown.           , sight p
but        , , Small but strong.           , sight p
came       , , She came to school.         , sight p
did        , , I did my work.              , sight p
do         , , I can do it.                , sight p
eat        , , I eat my snack.             , sight p
four       , , I see four birds.           , sight p
get        , , Get your bag.               , sight p
good       , , You did good work.          , sight p
have       , , I have a book.              , sight p
he         , , He is my friend.            , sight p
into       , , Go into the room.           , sight p
like       , , I like pizza.               , sight p
must       , , I must wash up.             , sight p
new        , , I have new shoes.           , sight p
no         , , No thank you.               , sight p
now        , , We go now.                  , sight p
on         , , Put it on.                  , sight p
our        , , This is our room.           , sight p
out        , , Let us go out.              , sight p
please     , , Help me please.             , sight p
pretty     , , That is pretty.             , sight p
ran        , , I ran outside.              , sight p
ride       , , I ride the bus.             , sight p
saw        , , I saw a bird.               , sight p
say        , , Say hello to me.            , sight p
she        , , She is here.                , sight p
so         , , I am so happy.              , sight p
soon       , , Lunch is soon.              , sight p
that       , , I want that one.            , sight p
there      , , Put it over there.          , sight p
they       , , They are my friends.        , sight p
this       , , I like this.                , sight p
too        , , Me too.                     , sight p
under      , , It is under the desk.       , sight p
want       , , I want more.                , sight p
was        , , It was fun.                 , sight p
well       , , I feel well.                , sight p
went       , , We went outside.            , sight p
what       , , What is that?               , sight p
white      , , The paper is white.         , sight p
who        , , Who is here?                , sight p
will       , , I will help.                , sight p
with       , , Come with me.               , sight p
yes        , , Yes please.                 , sight p

# ---- FIRST GRADE sight words (Dolch, 41) ----
after      , , We walk after recess.       , sight 1
again      , , Do it again.                , sight 1
an         , , I want an apple.            , sight 1
any        , , Do you have any?            , sight 1
as         , , Big as a bus.               , sight 1
ask        , , Ask for help.               , sight 1
by         , , Sit by me.                  , sight 1
could      , , I could do it.              , sight 1
every      , , Every day we read.          , sight 1
fly        , , Birds can fly.              , sight 1
from       , , This is from me.            , sight 1
give       , , Give it to me.              , sight 1
going      , , I am going home.            , sight 1
had        , , I had a snack.              , sight 1
has        , , She has a book.             , sight 1
her        , , That is her bag.            , sight 1
him        , , Give it to him.             , sight 1
his        , , That is his chair.          , sight 1
how        , , How are you?                , sight 1
just       , , I just finished.            , sight 1
know       , , I know that word.           , sight 1
let        , , Let me try.                 , sight 1
live       , , I live near school.         , sight 1
may        , , May I go?                   , sight 1
of         , , A cup of water.             , sight 1
old        , , My shoes are old.           , sight 1
once       , , Read it once.               , sight 1
open       , , Open the door.              , sight 1
over       , , It is over there.           , sight 1
put        , , Put it away.                , sight 1
round      , , The ball is round.          , sight 1
some       , , I want some more.           , sight 1
stop       , , Please stop.                , sight 1
take       , , Take your bag.              , sight 1
thank      , , Thank you.                  , sight 1
them       , , Give it to them.            , sight 1
then       , , We eat then we play.        , sight 1
think      , , I think it is fun.          , sight 1
walk       , , We walk in line.            , sight 1
were       , , We were happy.              , sight 1
when       , , When is lunch?              , sight 1

# Dolch second and third grade lists are not here on purpose — they sit above
# where this class is reading right now. Ask and I will add them.
`;
