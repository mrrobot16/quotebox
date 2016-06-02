import { Injectable } from '@angular/core';

@Injectable()
export class QuotesService {

  public quotes: Array<any>;
  public quote: string;
  public author: string;

  constructor() {
    console.log("I am happening in QuotesService");
    this.quotes = [
      {
      quote: "For this to work, we have to abandon traditional thinking from top to bottom, & left to right. Do everything differently #startup",
      author: ''
      },
      {
      quote: "I want to be the example of who my dauthers look for in future boyfriend",
      author: ''
      },
      {
      quote: 'This commitment, this sacrifice and these risks that I am taking - I am only able to do that on the strength of I’m doing it for our family. This is not about press for me but the legacy I am trying to leave for my family.',
      author: ''
      },
      {
      quote: "Entrepreneurial life is a roller coaster and the Lewis family has navigated that journey by staying connected. Communication is the key.",
      author: ''
      },
      {
      quote: "For this to work, we have to abandon traditional thinking from top to bottom, & left to right. Do everything differently #startup",
      author: ''
      },
      {
      quote: "Purpose can't be quantified with metrics, it can only be realized w/ the understanding of multiplying your dreams and efforts.",
      author: ''
      },
      {
      quote: "Your success depends on its second letter.",
      author: ''
      },
      {
      quote: "Don't wish it were easier, wish you were better.",
      author: ''
      },
      {
      quote: "Enthusiasm is infectious & energizing. People are motivated by leaders who possess a vision for an amazing today and a better tomorrow.",
      author: ''
      },
      {
      quote: "Theres a distinct difference from being unemployed and entrepreneurship.",
      author: ''
      },
      {
      quote: "We can succeed at almost anything if we have unlimited ambition, passion, enthusiasm and an unyielding dedication! #capacity",
      author: ''
      },
      {
      quote: "Get really good and consistent at the basics.",
      author: ''
      },
      {
      quote: "The start has startled a lot of people. Don't be afraid of being a beginner.",
      author: ''
      },
      {
      quote: "Dreaming of winning doesn't make you a winner, winning makes you a winner.",
      author: ''
      },
      {
      quote: "Most leaders you can see and hear but the unique ones, the special ones you can feel.",
      author: ''
      },
      {
      quote: "2 day is a new day 0 time to waste 1 grand vision 6 times the success 2016 is a 365 step program to turn your dreams into reality.",
      author: ''
      },
      {
      quote: 'Its stories like these that help keep me and the team motivated. Its these stories that reinforce, "yeah... Payroll should be free." Weve been in the lab non stop 15-20 hour days, weekends, all-nighters, disagreements, breakthroughs, highs and lows, setbacks, missed timelines, relationship building, sacrifices and we are still busting our butts and have lots of work to do. But as a team we know its worth it.',
      author: ''
      },
      {
      quote: "Making a difference is the best way to make a dollar. Funny how that works.",
      author: ''
      },
      {
      quote: "In a world thats built on Instant Gratification and so overly focused on time management, time constraints, appointments, schedules, time tables, perfect timing, it hard to create something timeless, but its worth your time to do so.",
      author: ''
      },
      {
      quote: "People are fascinated with how power works and how deals get done. The most intense stories of power and greatness are usually based on someones epic desire and singular focus to accomplish a particular thing.",
      author: ''
      },
      {
      quote: "So many people are upset with their 9 to 5 but they are sleep right now. Theres something special about doing what you love and becoming who you are meant to be. Greatness will require you to demand more of yourself. Ask yourself what are you committed too? What are you risking? #WhatsPossibleWednesdays",
      author: ''
      },
      {
      quote: "Excuses like opportunities will always make themselves available to you.",
      author: ''
      },
      {
      quote: "You never notice the time is right then do it, you always just do it and then realize the time was right.",
      author: ''
      },
      {
      quote: "Create & ignite energy and be able to put capital to work.",
      author: ''
      },
      {
      quote: "There's a difference between starting a #startup and having a #sidebusiness",
      author: ''
      },
      {
      quote: "Until youre ready to risk it all., youre not ready to have it all.",
      author: ''
      },
      {
      quote: "Lots of great #startups started 5-8 years ago. What new great companies are being built now? Hmmm I know 1.",
      author: ''
      },
      {
      quote: "Well designed #pitchdeck -> well designed products -> well designed #startup #designthinking",
      author: ''
      },
      {
      quote: "the bigger the checks the less time investors spend on the decks. 3mins top. Short, beautiful & concise. #startup #pitchdeck",
      author: ''
      },
      {
      quote: "2 rules of #success 1. Never quit 2. Repeat",
      author: ''
      },
      {
      quote: "There should be no need for a casual Friday if you work at a tech startup #Wearwhatyouwantatworkeveryday",
      author: ''
      },
      {
      quote: "Before a business can be built, a dream must be dreamed.",
      author: ''
      },
      {
      quote: "Believe in limitless possibilities and opportunities.",
      author: ''
      },
      {
      quote: "You can't build an A team, with B players. #startups",
      author: ''
      },
      {
      quote: "Investment tip: invest as much as you can in this… YOURSELF.",
      author: ''
      },
      {
      quote: "When solving a really big problem its just as much about finding the right people as it is about finding product marketing fit.",
      author: ''
      },
      {
      quote: "Better to not have a dime than to not have a dream.",
      author: ''
      },
      {
      quote: "Those that create the future, make history.",
      author: ''
      },
      {
      quote: "I do not wake up everyday to be a witness. Success isn't a spectator sport.",
      author: ''
      },
      {
      quote: "Building a great business transcends everything.",
      author: ''
      },
      {
      quote: "Them: Craig what do you actually do? Me: Whatever it takes. #entrepreneur",
      author: ''
      },
      {
      quote: "What's on the other side of fear? Nothing.",
      author: ''
      },
      {
      quote: "If you are focused on building a great business youre not as nervous as those trying to build #unicorns #substance #Startups",
      author: ''
      },
      {
      quote: 'Everyday is a "weekend". You can also plug in "holiday" or "vacation" or "Friday" whatever we like we should embody that everyday.',
      author: ''
      },
      {
      quote: "Your actions are your equity. If you take no action you have no value.",
      author: ''
      },
      {
      quote: "There is no rule book on how 2change the world. Theres no selection process on who gets 2change it. U just decide & do it.",
      author: ''
      },
      {
      quote: "We aren't concerned w/ designing a great vacation package 4our team were more focused on building a company where they don't want a vacation #culture",
      author: ''
      },
      {
      quote: "I propose that execution is not everything. #Entrepreneurship",
      author: ''
      },
      {
      quote: "I want to share free payroll with the world.",
      author: ''
      },
      {
      quote: "Nothing scales like #code The power of startups is that small teams have the power 2build multi-billion $ businesses w/ just lines of code.",
      author: ''
      },
      {
      quote: "u start a #startup & then u transition into building a business. The sooner the better. u can keep the core #culture as you grow.",
      author: ''
      },
      {
      quote: "Everyone has an opinion, don't be distracted from your vision.",
      author: ''
      },
      {
      quote: "Money will chase opportunity.",
      author: ''
      },
      {
      quote: "Strategy: Take risk. Keep showing up when most would quit.",
      author: ''
      },
      {
      quote: "Impossible is just impotent inspiration.",
      author: ''
      },
      {
      quote: "Why not build a biz thats orders of magnitude better than any1 else 4every1 involved. If u aren't going 2 build one, join one and go hard.",
      author: ''
      },
      {
      quote: "Being 0 #Revenue BY CHOICE lets you focus solely on hyper-fast customer growth & rely on the financial markets4, I couldn't imagine building a startup w/out a designer itd be like so pointless!",
      author: ''
      },
      {
      quote: "The amount of time u have in this life to leave your legacy is limited. That should be motivation enough. Man I Love Mondays.",
      author: ''
      },
      {
      quote: '"Can I build a tech startup without a technical cofounder?" - Yes. "Can I build a real business without a business cofounder?" - Of course.',
      author: ''
      },
      {
      quote: "Design each and every day around your dreams. Dream->Decide->Do->Dedicate->Deliver",
      author: ''
      },
      {
      quote: "Imagine the things you could do if you just did the things you imagine.",
      author: ''
      },
      {
      quote: "To distance yourself from your problems, dedicate yourself to your purpose.",
      author: ''
      },
      {
      quote: "Customer Success is not a position title its a way of life.",
      author: ''
      },
      {
      quote: `Your work ethic is where you'll discover your WOW factor.`,
      author: ''
      },
      {
      quote: "75% of today was problem solving. Understand the barrier, ask the right questions, recognize the opportunity and empower people to execute.",
      author: ''
      },
    ];

  }

  genQuote(){
    var quotes = this.quotes
    var random_quote = quotes[Math.floor(Math.random() * quotes.length)];
    return random_quote.quote;
  }

}
