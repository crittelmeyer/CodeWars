Mine is faster than top.

Analysis: It looks like we are implementing a very similar solution, but although the top answer is a little cleaner with the repeat() function, mine is faster, probably because I don't create the repeated space strings two separate times. I calculate once and store in the 'spaces' variable.

Performance tests: http://jsperf.com/codewars-christmas-tree-crittelmeyer

The results are that my implementation was faster than the top answer, and faster than any solutions that combined my results with the top.