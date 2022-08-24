const heartCheck = (trackId) => {
  return `
[id="heart-${trackId}"] {
position: absolute;
left: -100vw;
}

[for="heart-${trackId}"] {
color: #aab8c2;
cursor: pointer;
font-size: 30px;
align-self: center;  
transition: color 0.2s ease-in-out;
}

[for="heart-${trackId}"]:hover {
color: grey;
}

[for="heart-${trackId}"]::selection {
color: none;
background: transparent;
}

[for="heart-${trackId}"]::moz-selection {
color: none;
background: transparent;
}

[id="heart-${trackId}"]:checked + label {
color: #e2264d;
will-change: font-size;
animation: heart 1s cubic-bezier(.17, .89, .32, 1.49);
}

@keyframes heart-${trackId} {0%, 17.5% {font-size: 0;}}
`
}

module.exports = heartCheck;
