<!-- ===================================================
     JAVASCRIPT: LOCKSCREEN TYPEWRITER + PASSWORD LOGIC
     =================================================== -->
<script>
const errorMessages = [
  "This is your only warning.<br>Keep poking around and I'll hide in your closet. Just kidding, I'm too tall for that.",
  "This is your only warning.<br>Keep snooping and I’ll hide under your bed. Please stack snacks, and if you snore, I’m outta here.",
  "This is your only warning.<br>Keep going and I’ll be forced to watch you—awkwardly, from behind the curtains, munching cookies.",
  "This is your only warning.<br>Any more funny business and I'll perform an interpretive dance under your bed at 3AM.",
  "This is your only warning.<br>Try it one more time and I’ll whisper spoilers for every show you watch.",
  "This is your only warning.<br>Further attempts will result in an unsolicited dramatic reading of your browser history.",
  "This is your only warning.<br>Keep it up and I’ll teach your nan how to use TikTok. You will never know peace.",
  "This is your only warning.<br>Do it again and every time you try to sleep, you’ll hear the faint sound of someone eating crisps. Loudly. Relentlessly. Never stops.",
  "This is your only warning.<br>Try again and every time you sneeze, someone nearby will say “Bless you” in Latin. Unsettling, isn’t it?",
  "This is your only warning.<br>Try again and I’ll give your Netflix password to Little Shlav. You have no idea the things he watches.",
  "This is your only warning.<br>Try again and I’ll let Little Shlav loose in your kitchen. Last time, he started a soup cult and now the toaster won’t make eye contact with anyone.",
  "This is your only warning.<br>One more wrong move and I’ll send Monks to rearrange your furniture. Naked. At 2AM. He’ll play “Careless Whisper” on the accordion. No survivors."
];

const message = `
⚠️🚨 Protocol Lockdown 🚨⚠️
⚠️🚨👻 Certified Spectre Detected 👻🚨⚠️

Warning: Unauthorized access attempt detected.
Attempt has been logged.

Don’t panic... we’re not sending drones. Yet.

This file is classified.
Authorised personnel only.
If you're poking around without clearance,
do yourself a favour and close this tab...
or the firewall might start critiquing your late-night Google searches.

If you’re not here by accident...
and you’re not Some Of Them—

🔐 Then enter the password below.
Unlock the truth,
or walk away with your curiosity intact.

What you uncover may just violate your mind.
Proceed with caution.

BUT—
You want answers?
Then brace yourself...
You’re about to find All Of Them.
`;

const typewriter = document.getElementById("typewriter-text");
const passwordInput = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");
const correctPassword = "stabbydaddy"; // 👈 Set your real code here

let index = 0;

function typeEffect() {
  if (index < message.length) {
    const char = message.charAt(index);
    if (char === "\n") {
      typewriter.innerHTML += "<br>";
    } else {
      typewriter.innerHTML += char;
    }
    index++;
    setTimeout(typeEffect, 10); // Adjust speed as needed
  } else {
    setTimeout(() => {
      const controls = document.querySelector('.lockscreen-controls');
      controls.style.display = 'flex';
      setTimeout(() => { controls.style.opacity = '1'; }, 10); // smooth fade in
    }, 400); // Pause after typing ends
  }
} // <--- YOU WERE MISSING THIS BRACKET

submitBtn.addEventListener("click", () => {
  const input = passwordInput.value.toLowerCase().trim();
  if (input === correctPassword) {
    document.getElementById("lockscreen").style.display = "none";
    document.querySelector(".wrapper").style.display = "block";
  } else {
    const randomMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    errorMsg.innerHTML = randomMsg;
    errorMsg.style.display = "block";
    passwordInput.value = "";
  }
});

passwordInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".wrapper").style.display = "none";
  typeEffect();

  // Only add this event if the checkbox exists (safe for every page)
  const showPwd = document.getElementById('show-password');
  const pwdInput = document.getElementById('password-input');
  if (showPwd && pwdInput) {
    showPwd.addEventListener('change', function() {
      pwdInput.type = this.checked ? 'text' : 'password';
    });
  }
});

</script>
