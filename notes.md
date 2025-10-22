# CS 260 Notes

I've never really understood Github but now that I am learning about what it does, I think it's actually really cool and could be beneficial in the future.

These notes can be used on any exam or assignment throughout the semester. Remember to use git add, then git commit -m to type the commit comment, then push everything back to the repository in git hub.

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My public IP address is: 13.223.6.194
My instance is on the US-east-1 server, which is based in N. Virginia. The instance type I am using is the t3.micro version. In order to keep the same public IP address, you must never stop your server (Amazon doesn't charge you for when it's stopped), or assign an elastic IP address to your server so it can keep the same IP even when it's stopped. My domain is turley260.me, which I got from namecheap instead of Amazon Route 53. The A record type is what we used, and I connected the domain name to my already existing elastic IP. 

## Caddy

Caddy worked smoothly and now my turley260.me website has a secure connection whenever it is visited. I had to go into the secure shell on my GitBash console, and Ubuntu had Caddy previously installed. It was super simple to go in and get the secure connection going. It should support my root website, as well as the simon and startup subroot websites.

## HTML

I am slightly overwhelmed at the amount of different elements there are, but it is nice to have the little list from the GitHub instruction page. When linking images from other websites, I learned some are blocked, so I had to use Wikimedia commons to find the logo I wanted to use. 

The inputs section was also slightly overwhelming with the high number of different input types and each one's syntax, but I feel like I am getting slightly better at using HTML. One thing to remember is the color hex number, and how it ALWAYS needs to start with #. 

I used the different HTML elements to make 4 different pages for my startup application. WebSocket is used to provide realtime updates (like a leaderboard that updates as new data is added), database is used to store information/data, and 3rd party API is used to pull something someone else has already created into your own website (weather updates). 

## CSS

I love bootstrap. It makes styling the page effortless with the short commands that handle everything from margins to alignment. If you want CSS file commands to override the bootstrap commands, you must put "!important" so that the computer knows what to do. Although styling my startup longer than I anticipated, I feel like I have a real understanding of how it works and which commands are most important to know. 

My navbar looks amazing all due to this code I put in the header:
'''<header class="border-bottom">
                <h1 class="text-center pt-4 text-white"><b>FitnessBuddy</b></h1>
            <nav>
                <menu class="nav justify-content-center">
                    <li><a href="index.html" class="nav-link link-dark text-white">Login</a></li>
                    <li><a href="dashboard.html" class="nav-link link-dark text-white">Dashboard</a></li>
                    <li><a href="leaderboard.html" class="nav-link link-dark text-white">Leaderboard</a></li>
                </menu>
            </nav>
        </header>
'''

This is the proper link to be able to access the bootstrap commands:
'''<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" />
'''

## React Part 1: Routing

Using React was very interesting. It makes things much more condensed and simple, but it rquired me to change a lot of the tags and code that I had previously written, which was inconvinient. After changing everything and making it compatible with React, the website works great and will hopefully work well with the future changes I make to it.

## React Part 2: Reactivity

This part of the assignment was a big struggle for me. Implementing useState and useEffect throughout all the pages and figuring out how to make the login authentication work was tough. I want to remember how I made it so the login disappears from the nav bar when logged in, and logout pops up instead.

{authState !== 'Authenticated' && (
                    <li><NavLink to='login' className="nav-link link-dark text-white">Login</NavLink></li>
                  )}

{authState === 'Authenticated' && (
  <li>
    <NavLink to='login' className="nav-link link-dark text-white" onClick={() => handleAuthChange('', 'Unauthenticated')}>Logout</NavLink>
  </li>
)}

Remembering things like onClick or onChange is very beneficial and makes it so the actual functionality of the startup is better.


