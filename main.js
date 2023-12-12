const arrayQuote=[
    {
        'owner':" Oscar Wilde",
        'quote':"“Be yourself; everyone else is already taken.”"
    },
    {
        'owner':" Albert Einstein",
        'quote':"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        'owner':" Marcus Tullius Cicero",
        'quote':"“A room without books is like a body without a soul.”"
    },
    {
        'owner':" Bernard M. Baruch",
        'quote':"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    },
    {
        'owner':" Mahatma Gandhi",
        'quote':"“Be the change that you wish to see in the world.”"
    },
    {
        'owner':" Narcotics Anonymous",
        'quote':"“Insanity is doing the same thing, over and over again, but expecting different results.”"
    },
    {
        'owner':" Elbert Hubbard",
        'quote':"“A friend is someone who knows all about you and still loves you.”"
    }
]


function printArrayQuote() {

    var random = Number.parseInt(Math.random()*arrayQuote.length + 0);
    /*console.log(random)
    console.log(arrayQuote[random].quote)
    console.log(arrayQuote[random].owner)*/

    document.getElementById('ownerPage').innerHTML=arrayQuote[random].owner;
    document.getElementById('quotePage').innerHTML=arrayQuote[random].quote;
};