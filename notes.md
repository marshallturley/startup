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

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
