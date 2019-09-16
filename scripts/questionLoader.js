var questions = [{
        "question": "A set of all faculties in LAUTECH is an example of    ",
        "options": ["Null set", "Finite set", "Infinite set", "Singleton set"],
        "checks": ["<input type='radio' name='1' />", "<input type='radio' name='1' class='mio'/>", "<input type='radio' name='1'/>", "<input type='radio' name='1'/>", "<input type='radio' name='1'/>"]
    },
    {
        "question": "If X ={2,4,5} and U = {x : x E U, 0 < x <or equal to 10 }. Find X<sup>c</sup>  &cap; U.",
        "options": ["X", "U", "X<sup>c</sup>", "U<sup>c</sup>"],
        "checks": ["<input type='radio' name='2' id='panS'/>", "<input type='radio' name='2'/>", "<input type='radio' class='mio' name='2'/>", "<input type='radio' name='2'/>", "<input type='radio' name='2'/>"]
    },
    {
        "question": "Which of the following is a finite set",
        "options": ["A set of English vowels", "A set of positive integers", "A set of natural numbers", "A set of real numbers", "third connects two noun words"],
        "checks": ["<input type='radio' class='mio' name='3' id='panS'/>", "<input type='radio' name='3'/>", "<input type='radio' name='3'/>", "<input type='radio' name='3'/>", "<input type='radio' name='3'/>"]
    },
    {
        "question": "Let A = {1,2,3,4} and B = {3,4,5,6}. Find A&Delta;B   ",
        "options": ["{2,6,8}", "{1,2,6}", "{1,2,5,6}", "{2,5,6}"],
        "checks": ["<input type='radio' name='4' id='panS'/>", "<input type='radio'  name='4'/>", "<input type='radio' class='mio' name='4'/>", "<input type='radio' name='4'/>", "<input type='radio' name='4'/>"]
    },
    {
        "question": "If A={x:x<sup>2</sup>  = 25} and B = {x:3x + 2 = 0 or 2x +3} = 0, Find AUB",
        "options": ["{5,3/2, 2/3}", "{-5,5,-2/3,-3/2}", "{25,3.2,-3}", "{2/3,-2/3,-5/2}"],
        "checks": ["<input type='radio' name='5' id='panS'/>", "<input type='radio' class='mio' name='5'/>", "<input type='radio' name='5'/>", "<input type='radio' name='5'/>", "<input type='radio' name='5'/>"]
    },
    {
        "question": "In a survey of 60 people, it was found that 25 read Newsweek magazine, 26 read Time and 26 red Fortune. Also 9 read both Newsweek and Fortune, 11 read Newsweek and Time, 8 read both Time and Fortune and 8 read no magazine at all. Find the number of people who read all the three magazine, fill all eight regions of the Venn diagram and also determine the number of people who read exactly one magazine.",
        "options": ["3 and 15", "5 and 19", "3 and 5", "3 and 19"],
        "checks": ["<input type='radio' name='6' id='panS'/>", "<input type='radio' name='6'/>", "<input type='radio' name='6'/>", "<input type='radio' class='mio' name='6'/>", "<input type='radio' name='6'/>"]
    },
    {
        "question": "Given the universal set U = {1,2,3,4,5,6,7}, P = {1,2,3,4,5,6}, Q={1,3,5,7}. Find (P – Q<sup>i</sup>)<sup>i</sup>        ",
        "options": ["{2,4,6,7}", "{3,5,7}", "{1,4,6,7}", "{2,4,6}"],
        "checks": ["<input type='radio' name='7' id='panS' class='mio'/>", "<input type='radio' name='7'/>", "<input type='radio' name='7'/>", "<input type='radio' name='7'/>", "<input type='radio' name='7'/>"]
    },
    {
        "question": "Find the cardinality of the Set {1,2,3,5,6,7,10,11}",
        "options": ["11", "10", "9", "20"],
        "checks": ["<input type='radio' name='8' id='panS'/>", "<input type='radio' name='8'/>", "<input type='radio' name='8' class='mio'/>", "<input type='radio' name='8'/>", "<input type='radio' name='8'/>"]
    },
    {
        "question": "Find the power of the set A={0,5,11,31,50,52}",
        "options": ["2", "64", "32", "16"],
        "checks": ["<input type='radio' name='9' id='panS'/>", "<input type='radio' name='9' class='mio'/>", "<input type='radio' name='9'/>", "<input type='radio' name='9'/>", "<input type='radio' name='9'/>"]
    },
    {
        "question": "Set X - Y = Y - X if and only if ",
        "options": ["X&cap;Y = 6", "Y &cup; X", "X&cup; Y", "X = Y"],
        "checks": ["<input type='radio' name='10' id='panS'/>", "<input type='radio' name='10'/>", "<input type='radio' name='10'/>", "<input type='radio' name='10' class='mio'/>", "<input type='radio' name='10'/>"]
    },
    // first ten is done here with the input
    {
        "question": "Let X,Y and Z be subsets of a set N = {1,2,3,4,5,6,7,8} where X={1,2} Y={1,3,4} and Z = {5,6}. Find (XUY)<sup>c</sup>  intersection Z.",
        "options": ["{5,6,7}", "X", "Z", "S"],
        "checks": ["<input type='radio' name='11' id='panS'/>", "<input type='radio' name='11'/>", "<input class='mio' type='radio' name='11'/>", "<input type='radio' name='11' class='mio'/>", "<input type='radio' name='11'/>"]
    },

    {
        "question": "Venn diagram was first conceived by who?",
        "options": ["George Venn", "John Venn", "Don Venn", "None of the above"],
        "checks": ["<input type='radio' name='12' id='panS'/>", "<input type='radio' class='mio' name='12'/>", "<input type='radio' name='12'/>", "<input type='radio' name='12'/>", "<input type='radio' name='12'/>"]
    },
    {
        "question": "In an extended family of 30 people, 17 are professors, 15 are politicians. Find the member of people who are professors only.",
        "options": ["17", "15", "25", "30"],
        "checks": ["<input type='radio' name='13' id='panS'/>", "<input type='radio' name='13' class='mio'/>", "<input type='radio' name='13'/>", "<input type='radio' name='13'/>", "<input type='radio' name='13'/>"]
    },

    {
        "question": "A set which contains only one element is called",
        "options": ["Identity", "Null Set", "Singleton set", "Single set"],
        "checks": ["<input type='radio' name='14' id='panS'/>", "<input type='radio' name='14'/>", "<input class='mio' type='radio' name='14'/>", "<input type='radio' name='14'/>", "<input type='radio' name='14'/>"]
    },

    {
        "question": "In a class of 100 students 40 study Botany, 32 study Microbiology while 44 study Zoology. The number of student that study Botany and Microbiology is 24, Botany and Zoology is 24, while 20 study Microbiology and Zoology. If 20 students study all the three subjects, how many students study none of the three subjects.    ",
        "options": ["23", "23 students", "32", "32 students"],
        "checks": ["<input type='radio' name='15' id='panS'/>", "<input type='radio' name='15'/>", "<input type='radio' name='15'/>", "<input type='radio' name='15' class='mio'/>", "<input type='radio' name='15'/>"]
    },

    {
        "question": "If x is an element of A<sup>i</sup>&cap;B<sup>i</sup>, this can be rigorously proven to be an element of ",
        "options": ["A intersection B", "(AUB)<sup>i</sup>", "(A&cap;B)<sup>i</sup>", "A&cup;B"],
        "checks": ["<input type='radio' name='16' id='panS'/>", "<input type='radio' name='16' class='mio'/>", "<input type='radio' name='16'/>", "<input type='radio' name='16'/>", "<input type='radio' name='16'/>"]
    },

    {
        "question": "In a certain school, 500 student in 100 level are enrolled for the first semester examination. Out of this number, 400 offer Physics and 290 offer Chemistry. How many students offer Physics and Chemistry, if only 70 students offer neither Physics nor Chemistry? ",
        "options": ["260", "200", "300", "360"],
        "checks": ["<input type='radio' name='17' id='panS' class='mio'/>", "<input type='radio' name='17'/>", "<input type='radio' name='17'/>", "<input type='radio' name='17'/>", "<input type='radio' name='17'/>"]
    },

    {
        "question": "In a class of 80 students, 80 students study Mathematics, 60 study Physics and 56 study Chemistry. If 36 students study Mathematics, Physics and Chemistry, how many students study only Physics and Mathematics? How many students study only Chemistry?",
        "options": ["24 and null", "34 and 0", "24 and 0", "34 and null"],
        "checks": ["<input type='radio' name='18' id='panS' class='mio'/>", "<input type='radio' name='18'/>", "<input type='radio' name='18'/>", "<input type='radio' name='18'/>", "<input type='radio' name='18'/>"]
    },

    {
        "question": "Two sets are said to be disjoint if the cardinality of the intersection is",
        "options": ["Common", "Single", "Identical", "Zero"],
        "checks": ["<input type='radio' name='19' id='panS'/>", "<input type='radio' name='19'/>", "<input type='radio' name='19'/>", "<input type='radio' name='19' class='mio'/>", "<input type='radio' name='19'/>"]
    },

    {
        "question": "Suppose that 100 of the 120 Mathematics students at a college take at least one of the languages, French, German and Russian. Also suppose 65 study French, 20 study French and German, 45 study German, 25 study French and Russian, 42 study Russian, 15 study German and Russian. Find the numbers of students who study all three languages ",
        "options": ["8", "10", "5", "3"],
        "checks": ["<input type='radio' name='20' id='panS' class='mio'/>", "<input type='radio' name='20'/>", "<input type='radio' name='20'/>", "<input type='radio' name='20'/>", "<input type='radio' name='20'/>"]
    },
    // the second ten questions ends here
    {
        "question": "Determine the number of students who study exactly two languages ",
        "options": ["72", "56", "61", "43"],
        "checks": ["<input type='radio' name='21' id='panS'/>", "<input type='radio' name='21' class='mio' />", "<input type='radio' name='21'/>", "<input type='radio' name='21'/>", "<input type='radio' name='21'/>"]
    },
    {
        "question": "_____________ is a subset of every set  ",
        "options": ["Empty set", "Finite set", "Infinite set", "Disjoint set"],
        "checks": ["<input type='radio' name='22' id='panS'/>", "<input type='radio' name='22'/>", "<input class='mio' type='radio' name='22'/>", "<input type='radio' name='22'/>", "<input type='radio' name='22'/>"]
    },
    {
        "question": "If 7x+19/(x+1)(x+5) = A/x+1 + B/x+5, find A.  ",
        "options": ["3", "-2", "5", "2"],
        "checks": ["<input type='radio' class='mio' name='23' id='panS'/>", "<input type='radio' name='23'/>", "<input type='radio' name='23'/>", "<input type='radio' name='23'/>", "<input type='radio' name='23'/>"]
    },

    {
        "question": "Find the roots of the equation 2x<sup>2</sup> + 2/x<sup>2</sup> + x + 1/x = -3. ",
        "options": ["x=-&frac12;&plusmn; i&Sqrt;3/2 or -&frac14;&plusmn;&Sqrt;15/4 ", "x= &frac12;&plusmn; i&Sqrt;3/2 or -&plusmn;&Sqrt;15/4 ", "x = -&frac12;&plusmn; i&Sqrt;3/2 or  &plusmn;  i&Sqrt;15/4", "x = &frac12;&plusmn; i&Sqrt;3/3 or &frac14; &plusmn; i&Sqrt;15/4 "],
        "checks": ["<input type='radio' name='24' id='panS'/>", "<input type='radio' name='24'/>", "<input type='radio' name='24'/>", "<input class='mio' type='radio' name='24'/>", "<input type='radio' name='24'/>"]
    },

    {
        "question": "Solve for x if &Sqrt;x – 1 + 5&Sqrt; x-9 = 4&Sqrt; x-6 ",
        "options": ["20", "5", "10", "6"],
        "checks": ["<input type='radio' name='25' id='panS'/>", "<input type='radio' name='25'/>", "<input class='mio' type='radio' name='25'/>", "<input type='radio' name='25'/>", "<input type='radio' name='25'/>"]
    },

    {
        "question": "Solve for x if 2x<sup>3</sup> – 11x<sup>2</sup> + 17x -6 =0  ",
        "options": ["1,2,3", "&frac12;,2,3", "-1,2,-3", "&frac12; ,-2,3     "],
        "checks": ["<input type='radio' name='26' id='panS'/>", "<input class='mio' type='radio' name='26'/>", "<input type='radio' name='26'/>", "<input type='radio' name='26'/>", "<input type='radio' name='26'/>"]
    },

    {
        "question": "From a+b &ges; 2&Sqrt;ab ,evaluate &frac12; (a +b)(1/a<sup>2</sup> + 1/b<sup>2</sup>)(a<sup>4</sup>)/ b<sup>2</sup> + b<sup>4</sup>/a<sup> 2 </sup> ",
        "options": ["8&Sqrt;ab", "&Sqrt;ab", "4&Sqrt;ab", "16&Sqrt;ab"],
        "checks": ["<input type='radio' name='27' id='panS'/>", "<input type='radio' name='27'/>", "<input type='radio' name='27'/>", "<input class='mio' type='radio' name='27'/>", "<input type='radio' name='27/>"]
    },
    {
        "question": "Express 3x<sup>2</sup> + x + 1/ x(x+1)<sup>2</sup> in partial fractions and find the value of A+B-C ",
        "options": ["0", "-3", "-2", "-6"],
        "checks": ["<input type='radio' class='mio' name='28' id='panS'/>", "<input type='radio' name='28'/>", "<input type='radio' name='28'/>", "<input type='radio' name='28'/>", "<input type='radio' name='28'/>"]
    },

    {
        "question": "Find the remainder when x<sup>3</sup> + 3x<sup>2</sup> + 13x -10 is divided by x-3 ",
        "options": ["5", "-5", "3", "-3"],
        "checks": ["<input type='radio' name='29' class='mio' id='panS'/>", "<input type='radio' name='29'/>", "<input type='radio' name='29'/>", "<input type='radio' name='29'/>", "<input type='radio' name='29'/>"]
    },

    {
        "question": "Find the xy log<sub>x</sub> 27 + log<sub>y</sub>4 = 5 and log<sub>x</sub>27 - log<sub>y</sub>4 = 1",
        "options": ["4", "4&Sqrt;2", "2&Sqrt;3", "6"],
        "checks": ["<input type='radio' name='30' id='panS'/>", "<input type='radio' name='30'/>", "<input type='radio' name='30'/>", "<input type='radio' class='mio' name='30'/>", "<input type='radio' name='30'/>"]
    },
    // third ten and its inputs ends here
    {
        "question": "If log<sub>a</sub>x =p and log<sub>a</sub>y =q, find xy ",
        "options": ["a<sup>pq</sup>", "a<sup>p-q</sup>", "a<sup>p/q</sup>", "a<sup>p+q</sup>"],
        "checks": ["<input type='radio' name='31' id='panS'/>", "<input type='radio' name='31'/>", "<input type='radio' name='31'/>", "<input type='radio' name='31'/>", "<input type='radio' name='31'/>"]
    },

    {
        "question": "Determine the range of values of x satisfying the inequality 1/x+1 > 1  ",
        "options": ["x>1 or x<0", "-1<x<0", "1<x<2", "0<x<1"],
        "checks": ["<input type='radio' name='32' id='panS'/>", "<input type='radio' name='32' class='mio'/>", "<input type='radio' name='32'/>", "<input type='radio' name='32'/>", "<input type='radio' name='32'/>"]
    },

    {
        "question": "If &Sqrt;2x+7 = &Sqrt;x + 2, find x ",
        "options": ["0,1", "0,9", "9,1", "-9,1"],
        "checks": ["<input type='radio' name='33' id='panS'/>", "<input type='radio' name='33'/>", "<input class='mio' type='radio' name='33'/>", "<input type='radio' name='33'/>", "<input type='radio' name='33'/>"]
    },

    {
        "question": "Solve the exponential equation 5<sup>2x+1</sup> – 26(5<sup>x</sup>) + 5 = 0  ",
        "options": ["-1,1", "-1,1", "0,-2", "0,-1"],
        "checks": ["<input class='mio' type='radio' name='34' id='panS'/>", "<input type='radio' name='34'/>", "<input type='radio' name='34'/>", "<input type='radio' name='34'/>", "<input type='radio' name='34'/>"]
    },

    {
        "question": "If m and n are two real number such that 3log<sub>4</sub>m = 4log<sub>8</sub> n. Find the relation between m and which does not involve log.",
        "options": ["m<sup>9</sup> = n<sup>8</sup>", "M<sup>4</sup> = n<sup>3</sup>", "M<sup>7</sup> = n<sup>3</sup>", "M<sup>3</sup> = n<sup>2</sup>"],
        "checks": ["<input type='radio' class='mio' name='35' id='panS'/>", "<input type='radio' name='35'/>", "<input type='radio' name='35'/>", "<input type='radio' name='35'/>", "<input type='radio' name='35'/>"]
    },

    {
        "question": "Simplify 1-3logy = logx",
        "options": ["&Sqrt;10/x", "&Sqrt;10/3x", "3&Sqrt;10/x", "3&Sqrt;10/ x<sup>3</sup>"],
        "checks": ["<input type='radio' name='36' id='panS'/>", "<input type='radio' name='36'/>", "<input class='mio' type='radio' name='36'/>", "<input type='radio' name='36'/>", "<input type='radio' name='36'/>"]
    },

    {
        "question": "Find x in (0.25)<sup>x+1</sup> = 16",
        "options": ["2", "-3", "4", "0.25"],
        "checks": ["<input type='radio' name='37' id='panS'/>", "<input type='radio' class='mio' name='37'/>", "<input type='radio' name='37'/>", "<input type='radio' name='37'/>", "<input type='radio' name='37'/>"]
    },

    {
        "question": "Solve for x in x<sup>3</sup> – 3x<sup>2</sup> – 4x + 12 = 0",
        "options": ["2,2,3", "2,2,-3", "-2,2,3", "-2,2,-3"],
        "checks": ["<input type='radio' name='38' id='panS'/>", "<input type='radio' name='38'/>", "<input class='mio' type='radio' name='38'/>", "<input type='radio' name='38'/>", "<input type='radio' name='38'/>"]
    },

    {
        "question": "Simplify 7x + 1/3 &ges; 2x/3 – 2",
        "options": ["x &les; 7/19", "x &les; -7/19", "x &ges; -7/19", "x &ges; 7/19"],
        "checks": ["<input type='radio' name='39' id='panS'/>", "<input type='radio' name='39'/>", "<input class='mio' type='radio' name='39'/>", "<input type='radio' name='39'/>", "<input type='radio' name='39'/>"]
    },

    {
        "question": "Solve 3x-2<x+1 &les; 2x+3",
        "options": ["2<x &les; 2/3", "2/3 < x &les; 2", "-2/3 &les; x < 2", "-2 &les; x<2/3"],
        "checks": ["<input type='radio' name='40' id='panS'/>", "<input type='radio' name='40'/>", "<input type='radio' name='40'/>", "<input type='radio' class='mio' name='40'/>", "<input type='radio' name='40'/>"]
    },
    // the fourth ten ends here
    {
        "question": "Solve for x if 1/2log<sub>x</sub> 64 = 3",
        "options": ["&frac12;", "1", "3", "2"],
        "checks": ["<input type='radio' name='41' id='panS'/>", "<input type='radio' name='41'/>", "<input type='radio' name='41'/>", "<input type='radio' name='41' class='mio'/>", "<input type='radio' name='41'/>"]
    },

    {
        "question": "Simplify 1/(1+&Sqrt;7)<sup>2</sup>",
        "options": ["4 – 2&Sqrt;7/8", "4- &Sqrt;7/18", "4- &Sqrt;7/8", "4 + &Sqrt;7/8"],
        "checks": ["<input type='radio' name='42' id='panS'/>", "<input type='radio' name='42' class='mio' />", "<input type='radio' name='42'/>", "<input type='radio' name='42'/>", "<input type='radio' name='42'/>"]
    },

    {
        "question": "Factorize and find the roots of the equation x<sup>3</sup> + 5x<sup>2</sup> -2x -24 = 0",
        "options": ["2,3,4", "-2,-3,-4", "-2,3,-4", "2,-3,-4"],
        "checks": ["<input type='radio' name='43' id='panS'/>", "<input type='radio' name='43'/>", "<input type='radio' name='43'/>", "<input type='radio' name='43' class='mio' />", "<input type='radio' name='43'/>"]
    },

    {
        "question": "Solve for x if &Sqrt;2x -2 – &Sqrt; x-2 = &Sqrt;x",
        "options": ["2 or 3", "3 or 2", "3 or 1", "2 or 1"],
        "checks": ["<input type='radio' name='44' id='panS'/>", "<input type='radio' name='44'/>", "<input type='radio' name='44'/>", "<input type='radio' name='44' class='mio'/>", "<input type='radio' name='44'/>"]
    },

    {
        "question": "The 3<sup>rd</sup> and 9<sup>th</sup> terms of a linear sequence are 4p-2q and 10p – 8q respectively. Find the common difference.",
        "options": ["7", "70 + 4q", "P + 2q", "p-q"],
        "checks": ["<input type='radio' name='45' id='panS'/>", "<input type='radio' name='45'/>", "<input type='radio' name='45'/>", "<input type='radio' name='45' class='mio'/>", "<input type='radio' name='45'/>"]
    },

    {
        "question": "A G.P has its 3<sup>rd</sup> and 7<sup>th</sup> term as 45 and 3645 respectively . What is the product of its 2<sup>nd</sup> and 4th",
        "options": ["2520", "2025", "2250", "2225"],
        "checks": ["<input type='radio' name='46' id='panS'/>", "<input type='radio' class='mio' name='46'/>", "<input type='radio' name='46'/>", "<input type='radio' name='46'/>", "<input type='radio' name='46'/>"]
    },

    {
        "question": "Given that 4,x,y,324,972 is a G.P. find the sum of x and y",
        "options": ["48", "44", "14", "444"],
        "checks": ["<input type='radio' name='47' class='mio' id='panS'/>", "<input type='radio' name='47'/>", "<input type='radio' name='47'/>", "<input type='radio' name='47'/>", "<input type='radio' name='47'/>"]
    },

    {
        "question": "The nth term of a sequence is 3<sup>n</sup> – 2<sup>n+1</sup>. Find the sum of the 7<sup>th</sup> and 9<sup>th</sup> term",
        "options": ["16678", "16887", "116718", "20590"],
        "checks": ["<input type='radio' name='48' id='panS'/>", "<input type='radio' name='48'/>", "<input type='radio' name='48'/>", "<input class='mio' type='radio' name='48'/>", "<input type='radio' name='48'/>"]
    },

    {
        "question": "What is the common ratio of G.P if the first n terms is S<sub>n</sub> = 6 – 3/2<sup>n – 1</sup>  ",
        "options": ["6", "3", "3/2", "2/3"],
        "checks": ["<input type='radio' name='49' id='panS'/>", "<input type='radio' name='49'/>", "<input class='mio' type='radio' name='49'/>", "<input type='radio' name='49'/>", "<input type='radio' name='49'/>"]
    },

    {
        "question": "___________ is the summation of terms of some sequence",
        "options": ["Geometric progression", "Arithmetic progression", "Series", "Sequence"],
        "checks": ["<input type='radio' name='50' id='panS'/>", "<input type='radio' name='50'/>", "<input type='radio' class='mio' name='50'/>", "<input type='radio' name='50'/>", "<input type='radio' name='50'/>"]
    },
    // the fifth ten and its inputs end here
    {
        "question": "Given the sequence 5,1,3… which of the sequence is -75",
        "options": ["21<sup>st</sup>", "5<sup>th</sup>", "75<sup>th</sup>", "84<sup>th</sup>"],
        "checks": ["<input type='radio' class='mio' name='51' id='panS'/>", "<input type='radio' name='51'/>", "<input type='radio' name='51'/>", "<input type='radio' name='51'/>", "<input type='radio' name='51'/>"]
    },

    {
        "question": "Insert four arithmetic mean between 3 and 18 ",
        "options": ["1,2,3,4", "6,9,12,15", "5,4,3,1", "6,9,13,15"],
        "checks": ["<input type='radio' name='52' id='panS'/>", "<input type='radio' class='mio' name='52'/>", "<input type='radio' name='52'/>", "<input type='radio' name='52'/>", "<input type='radio' name='52'/>"]
    },

    {
        "question": "What is the sum of integers between 1 – 1000",
        "options": ["1001", "1000001", "500500", "999999"],
        "checks": ["<input type='radio' name='53' id='panS'/>", "<input type='radio' name='53'/>", "<input type='radio' class='mio' name='53'/>", "<input type='radio' name='53'/>", "<input type='radio' name='53'/>"]
    },

    {
        "question": "Find the product 9<sup>th</sup> and 12<sup>th</sup> term of the sequence 4n<sup>2</sup> – 2(n-1) ",
        "options": ["152532", "155232", "125532", "135522"],
        "checks": ["<input type='radio' name='54' id='panS'/>", "<input type='radio' name='54' class='mio'/>", "<input type='radio' name='54'/>", "<input type='radio' name='54'/>", "<input type='radio' name='54'/>"]
    },

    {
        "question": "If (2k-5), (k-4), (10-3k) form a sequence of G.P. Find the value(s) of k ",
        "options": ["&frac12; or 5", "12 or 2", "22/7 or 3", "17 or 5"],
        "checks": ["<input type='radio' name='55' id='panS'/>", "<input type='radio' name='55'/>", "<input class='mio' type='radio' name='55'/>", "<input type='radio' name='55'/>", "<input type='radio' name='55'/>"]
    },


    {
        "question": "What is the 12<sup>th</sup> term of the GP 2,14,98, ….",
        "options": ["2(8<sup>12</sup>)", "7<sup>11</sup>", "2(7<sup>11</sup>)", "8<sup>12</sup>"],
        "checks": ["<input type='radio' name='56' id='panS'/>", "<input type='radio' name='56'/>", "<input class='mio' type='radio' name='56'/>", "<input type='radio' name='56'/>", "<input type='radio' name='56'/>"]
    },

    {
        "question": "What is the common difference of the linear sequence AP 8,6&frac12;,5,3&frac12;,.... ",
        "options": ["2", "1&frac12;", "-1&frac12;", "6"],
        "checks": ["<input type='radio' name='57' id='panS'/>", "<input type='radio' name='57'/>", "<input type='radio' class='mio' name='57'/>", "<input type='radio' name='57'/>", "<input type='radio' name='57'/>"]
    },

    {
        "question": "Given T<sub>n</sub>  = 2n<sup>n-1</sup>, find T<sub>2</sub> ",
        "options": ["8", "10", "64", "6"],
        "checks": ["<input type='radio' name='58' id='panS'/>", "<input type='radio' name='58'/>", "<input type='radio' name='58' class='mio'/>", "<input type='radio' name='58'/>", "<input type='radio' name='58'/>"]
    },

    {
        "question": "Find the sum of the 9 terms of the sequence 4,20,100,500, …",
        "options": ["19542", "195", "195421", "1953124"],
        "checks": ["<input type='radio' name='59' id='panS'/>", "<input type='radio' name='59'/>", "<input type='radio' name='59'/>", "<input class='mio' type='radio' name='59'/>", "<input type='radio' name='59'/>"]
    },

    {
        "question": "If T<sub>n</sub> = (n – 2)(2n + 1) = 33, find  n ",
        "options": ["5", "10", "64", "6"],
        "checks": ["<input type='radio' name='60' id='panS' class='mio'/>", "<input type='radio' name='60'/>", "<input type='radio' name='60'/>", "<input type='radio' name='60'/>", "<input type='radio' name='60'/>"]
    },

    //the sixth ten and its inputs end here

    {
        "question": "The nth term of a sequence is 3n-2<sup>n+1</sup>. Find the sum of the 7<sup>th</sup> and 9<sup>th</sup> term ",
        "options": ["16678", "16887", "16728", "20590"],
        "checks": ["<input type='radio' name='61' id='panS' />", "<input type='radio' name='61'/>", "<input type='radio' name='61'/>", "<input type='radio' name='61' class='mio'/>", "<input type='radio' name='61'/>"]
    },

    {
        "question": "If n<sup>2</sup> + 5n. Find the sum of series to 3<sup>rd</sup> term ",
        "options": ["62", "26", "23", "36"],
        "checks": ["<input type='radio' name='62' class='mio' id='panS'/>", "<input type='radio' name='62'/>", "<input type='radio' name='62'/>", "<input type='radio' name='62'/>", "<input type='radio' name='62'/>"]
    },

    {
        "question": "The second and sixth term of an AP are 10 and 34. Find the common difference ",
        "options": ["2", "4", "6", "8"],
        "checks": ["<input type='radio' name='63' id='panS'/>", "<input type='radio' name='63'/>", "<input type='radio' name='63' class='mio'/>", "<input type='radio' name='63'/>", "<input type='radio' name='63'/>"]
    },

    {
        "question": "The first term of an AP is equal to one-half the common difference (d). The 8<sup>th</sup> term of the AP is  _________ ",
        "options": ["4d", "6d", "13d/2", "15d/2"],
        "checks": ["<input type='radio' name='64' id='panS'/>", "<input type='radio' name='64'/>", "<input type='radio' name='64'/>", "<input type='radio' name='64' class='mio'/>", "<input type='radio' name='64'/>"]
    },

    {
        "question": "The sum of the 1<sup>st</sup> and 2<sup>nd</sup> term of an AP is 8 and the 10<sup>th</sup> term is 38. The sum of the 7<sup>th</sup> and 8<sup>th</sup> term is ______",
        "options": ["30", "48", "56", "64"],
        "checks": ["<input type='radio' name='65' id='panS'/>", "<input type='radio' name='65'/>", "<input type='radio' name='65' class='mio'/>", "<input type='radio' name='65'/>", "<input type='radio' name='65'/>"]
    },

    {
        "question": "The first term of an AP is 6 and the fifth term is 18. Find the number of terms in the series having a sum of 162. ",
        "options": ["21", "15", "12", "9"],
        "checks": ["<input type='radio' name='66' id='panS'/>", "<input type='radio' name='66'/>", "<input type='radio' name='66'/>", "<input type='radio' name='66' class='mio'/>", "<input type='radio' name='66'/>"]
    },

    {
        "question": "The sum of the first 21 terms of the progression -18,-15,-12, … is   ",
        "options": ["441", "336", "270", "252"],
        "checks": ["<input type='radio' name='67' id='panS'/>", "<input type='radio' name='67'/>", "<input type='radio' name='67'/>", "<input type='radio' name='67' class='mio'/>", "<input type='radio' name='67'/>"]
    },

    {
        "question": "Find the sum to infinity of the series 1 + 7/10 + (7/10)<sup>2</sup> + (7/10)<sup>3</sup> + … ",
        "options": ["2 + 7/10", "3 + 1/3", "5", "7"],
        "checks": ["<input type='radio' name='68' id='panS'/>", "<input type='radio' name='68' class='mio'/>", "<input type='radio' name='68'/>", "<input type='radio' name='68'/>", "<input type='radio' name='68'/>"]
    },

    {
        "question": "The nth term of the sequence 6,10,15,21, … is ",
        "options": ["n(n+2)/2", "n(n+2)(n+3)/2", "(n + 1)(n+2)", "2n(n+2)"],
        "checks": ["<input type='radio' name='69' id='panS'/>", "<input type='radio' name='69' class='mio'/>", "<input type='radio' name='69'/>", "<input type='radio' name='69'/>", "<input type='radio' name='69'/>"]
    },

    {
        "question": "A committee of two men and three women is to be chosen from five men and four women. How many different committees can be formed ? ",
        "options": ["24", "5", "6", "40"],
        "checks": ["<input type='radio' name='70' id='panS'/>", "<input type='radio' name='70'/>", "<input type='radio' name='70'/>", "<input type='radio' name='70' class='mio'/>", "<input type='radio' name='70'/>"]
    },
    //seventh ten and its inputs ends here

    {
        "question": "The expansion of (a-2b)<sup>4</sup> is ",
        "options": ["A<sup>4</sup> – 8a<sup>3</sup> + 24a<sup>2</sup>b – 32ab<sup>3</sup> + 16b<sup>4</sup>", "a<sup>4 </sup> – 8a<sup>2</sup>b<sup>2</sup> – 24ab<sup>2</sup> 32ab<sup>3</sup> + 16b<sup>4</sup>", "a<sup>4</sup> – 8a<sup>3</sup>b + 24a<sup>2</sup>b<sup>2</sup> – 32ab<sup>3</sup> + 16b<sup>4</sup>", "a<sup>4</sup> + 8a<sup>3</sup>b – 24a<sup>2</sup>b<sup>2</sup> +32ab<sup>3</sup>  - 16b<sup>4</sup>"],
        "checks": ["<input type='radio' name='71' id='panS'/>", "<input type='radio' name='71'/>", "<input type='radio' name='71' class='mio'/>", "<input type='radio' name='71'/>", "<input type='radio' name='71'/>"]
    },

    {
        "question": "simplify 3&Sqrt;(1 - 3x) &Sqrt;(1 + x) divided by (1 + x/2)<sup>3</sup> given that powers of x above the first may be neglected",
        "options": ["1 – 2x", "2 –x", "1 + x", "3 + x"],
        "checks": ["<input type='radio' name='72' id='panS'/>", "<input type='radio' name='72'/>", "<input type='radio' name='72' class='mio'/>", "<input type='radio' name='72'/>", "<input type='radio' name='72'/>"]
    },

    {
        "question": "Using binomial theorem writes and simplifies the first three terms of the expansion of (1 + 1/2a)<sup>6</sup>",
        "options": ["a + 3a -1", "1 + 3a + a", "1 + 3/a + 15/4a<sup>2</sup>", "3a + 15/4 a<sup>2</sup> + 1"],
        "checks": ["<input type='radio' name='73' id='panS'/>", "<input type='radio' name='73'/>", "<input type='radio' name='73' class='mio'/>", "<input type='radio' name='73'/>", "<input type='radio' name='73'/>"]
    },

    {
        "question": "Find the value of 1/3&Sqrt;1.003 by expanding 1/3&Sqrt;1+x to 3 decimal place ",
        "options": ["1.3999", "0.999", "0.589", "0.321"],
        "checks": ["<input type='radio' name='74' id='panS'/>", "<input type='radio' name='74' class='mio'/>", "<input type='radio' name='74'/>", "<input type='radio' name='74'/>", "<input type='radio' name='74'/>"]
    },

    {
        "question": "Find the expansion of 2/(1-x)(1+x)",
        "options": ["2(1 – x<sup>2</sup>)", "2 – 3x<sup>2</sup>", "2(1 + x<sup>2</sup>)", "3(x<sup>2</sup> + 1)"],
        "checks": ["<input type='radio' name='75' id='panS'/>", "<input type='radio' name='75'/>", "<input type='radio' name='75' class='mio'/>", "<input type='radio' name='75'/>", "<input type='radio' name='75'/>"]
    },

    {
        "question": "Find the largest coefficient in (3x – 2)<sup>3</sup> ",
        "options": ["10", "34", "100", "54"],
        "checks": ["<input type='radio' name='76' id='panS'/>", "<input type='radio' name='76'/>", "<input type='radio' name='76'/>", "<input type='radio' name='76' class='mio'/>", "<input type='radio' name='76'/>"]
    },

    {
        "question": "Use Pascal triangle to obtain the expansion for (4x – y)<sup>5</sup>",
        "options": ["1024x<sup>5</sup> – 1280x<sup>4</sup>y + 640x<sup>3</sup>y<sup>2</sup> – 16x<sup>2</sup>y<sup>3</sup> + 20xy<sup>4</sup>-y<sup>5</sup>", "⦁	x<sup>5</sup> – 1280x<sup>4</sup>y + 640x<sup>3</sup>y<sup>2</sup> – 160x<sup>2</sup>y<sup>3</sup> + xy<sup>4</sup>-y<sup>5</sup>", "⦁	1024x<sup>5</sup> – 1280x<sup>4</sup>y + 640x<sup>3</sup>y<sup>2</sup> – 160x<sup>2</sup>y<sup>3</sup> + 20xy<sup>4</sup> - y<sup>5</sup>", "⦁	x<sup>5</sup>y + x<sup>4</sup>y + 3xy<sup>2</sup> + 16x<sup>2</sup>y<sup>3</sup> + 2xy<sup>3</sup> + 10y<sup>3</sup> + y<sup>5</sup>"],
        "checks": ["<input type='radio' name='77' id='panS'/>", "<input type='radio' name='77'/>", "<input type='radio' name='77' class='mio'/>", "<input type='radio' name='77'/>", "<input type='radio' name='77'/>"]
    },

    {
        "question": "Express 1/(2 + x)<sup>2</sup> in ascending powers x as far as the term in x<sup>3</sup>",
        "options": [" ¼ + x/4 + 3x<sup>2</sup>/16 + x<sup>3</sup>/8", "¼ -x + 3x<sup>2</sup>/16 + x<sup>3</sup>/2", "¼ - x/4 + 3x<sup>2</sup>/16 + x<sup>3</sup>/8", "¼-x  + x<sup>2</sup> /8 + 3x<sup>2</sup>/16"],
        "checks": ["<input type='radio' name='78' id='panS'/>", "<input type='radio' name='78'/>", "<input type='radio' name='78' class='mio'/>", "<input type='radio' name='78'/>", "<input type='radio' name='78'/>"]
    },

    {
        "question": "Einstein’s theory of relativity predicts that if a stick of length l moves with a velocity in the direction of its length, it will shrink by factor root 1-v<sup>2</sup>/c<sup>2</sup> where C is the speed of light. What is the approximate low speed by taking the first terms of the expansion ?",
        "options": ["1 + 2V<sup>2</sup>/C<sup>2</sup>", "1 – 2C<sup>2</sup>/V<sup>2</sup>", "1 + V<sup>2</sup> / 2C<sup>2</sup>", "1 – V<sup>2</sup> / 2C<sup>2</sup>"],
        "checks": ["<input type='radio' name='79' id='panS'/>", "<input type='radio' name='79'/>", "<input type='radio' name='79'/>", "<input type='radio' name='79' class='mio'/>", "<input type='radio' name='79'/>"]
    },

    {
        "question": "Find the term independent of y in the expression ( y<sup>4</sup> + 3/y<sup>2</sup> )<sup>36</sup>",
        "options": ["3.04 x 10<sup>20</sup>", "3.54 x 10<sup>20</sup>", "3.54 x 10<sup>10</sup>", "3.0 x 10<sup>20</sup>"],
        "checks": ["<input type='radio' name='80' id='panS'/>", "<input type='radio' name='80' class='mio'/>", "<input type='radio' name='80'/>", "<input type='radio' name='80'/>", "<input type='radio' name='80'/>"]
    },
    // eight ten ends here
    {
        "question": "Find the greatest coefficient in the expansion of (7 + 5x)<sup>-3</sup>",
        "options": ["0.1114", "0.0114", "0.0014", "0.114"],
        "checks": ["<input type='radio' name='81' id='panS'/>", "<input type='radio' name='81' class='mio'/>", "<input type='radio' name='81'/>", "<input type='radio' name='81'/>", "<input type='radio' name='81'/>"]
    },

    {
        "question": "Construct an equation whose roots are &Sqrt;2 + 1, &Sqrt;2 -1",
        "options": ["x<sup>2</sup> + 2x = &Sqrt;-2", "2x<sup>2</sup> – 2&Sqrt; 2x = 1", "x<sup>2</sup> – 2&Sqrt;2x = -1", "2x<sup>2</sup> + 5x – &Sqrt;2 "],
        "checks": ["<input type='radio' name='82' id='panS'/>", "<input type='radio' name='82'/>", "<input type='radio' name='82' class='mio'/>", "<input type='radio' name='82'/>", "<input type='radio' name='82'/>"]
    },

    {
        "question": "If &alpha; and &beta; are roots of the equation ax<sup>2</sup> + bx + c = 0, form an equation whose roots are",
        "options": ["3x<sup>2</sup>", "x<sup>2</sup> - 3x - 2", "x<sup>2</sup> - 3x + 2", "3x<sup>2</sup> - 2x – 1"],
        "checks": ["<input type='radio' name='83' id='panS'/>", "<input type='radio' name='83'/>", "<input type='radio' name='83' class='mio'/>", "<input type='radio' name='83'/>", "<input type='radio' name='83'/>"]
    },

    {
        "question": "If &alpha; and &beta; are roots of the equation 3x<sup>2</sup> + 5x -1 = 0, construct an equation whose roots are ",
        "options": ["10x<sup>2</sup> + 3x + 4 = 0", "x<sup>2</sup> + 10x – 4 = 0", "3x<sup>2</sup> + 4x – 10 = 0", "3x<sup>2</sup> -10x – 4 = 0"],
        "checks": ["<input type='radio' name='84' id='panS'/>", "<input type='radio' name='84'/>", "<input type='radio' name='84'/>", "<input type='radio' name='84' class='mio'/>", "<input type='radio' name='84'/>"]
    },

    {
        "question": "If &alpha;  are &beta; the roots of the equation pt<sup>2</sup> – qt – r = 0, find the values of ",
        "options": ["q –p, qp", "q/p , r/pq", "qr, pq", "q/p , -r/p"],
        "checks": ["<input type='radio' name='85' id='panS'/>", "<input type='radio' name='85'/>", "<input type='radio' name='85'/>", "<input type='radio' name='85' class='mio'/>", "<input type='radio' name='85'/>"]
    },

    {
        "question": "One roots of the equation 27x<sup>2</sup> +bx + 8 = 0 is known to be the square of the other. Find b ",
        "options": ["-30", "-8", "27", "1"],
        "checks": ["<input type='radio' name='86' id='panS' class='mio'/>", "<input type='radio' name='86'/>", "<input type='radio' name='86'/>", "<input type='radio' name='86'/>", "<input type='radio' name='86'/>"]
    },

    {
        "question": "A matrix whose determinant equals zero is called ________________ ",
        "options": ["Null matrix", "Determinant matrix", "Zero matrix", "Singular matrix"],
        "checks": ["<input type='radio' name='87' id='panS'/>", "<input type='radio' name='87'/>", "<input type='radio' name='87'/>", "<input type='radio' name='87' class='mio'/>", "<input type='radio' name='87'/>"]
    },

    {
        "question": "A matrix is a collection of numbers of elements arranged in ______________ and _________ ",
        "options": ["Orders and columns", "Rows and sizes", "Rows and columns", "rows and orders"],
        "checks": ["<input type='radio' name='88' id='panS'/>", "<input type='radio' name='88'/>", "<input type='radio' name='88' class='mio'/>", "<input type='radio' name='88'/>", "<input type='radio' name='88'/>"]
    },

    {
        "question": "The adjoint of a square matrix A is ? ",
        "options": ["Matrix of cofactors", "Transpose of minors", "Transpose of symmetric matrix", "Transpose of cofactor matrix"],
        "checks": ["<input type='radio' name='89' id='panS'/>", "<input type='radio' name='89'/>", "<input type='radio' name='89'/>", "<input type='radio' name='89' class='mio'/>", "<input type='radio' name='89'/>"]
    },

];



var mthP = JSON.stringify(questions);
export var mthPQ = JSON.parse(mthP);
const firstSemester = document.querySelector(".firstSemester");
const sectionMth101 = document.querySelector("section.mth101");
const retakeExamBtn = document.querySelector(".retakeExam");
const submitMthBtn = document.querySelector("button.mthSubmit");
const goToCourses = document.querySelector(".goToCourses");
const modalContainer = document.querySelector('.modalcontainer'); // for the result display modal container with faded background.
export class exams {
    constructor() {

    }

    public_method_fetchQuestions() {
        var questionBox = document.querySelector('section.mth101');
        var span = document.createElement('span');
        span.setAttribute('class', 'questionsContainer');
        questionBox.appendChild(span);
        var j = 0;
        for (var i = 0; i < 50; i++) {
            let x = Math.floor(Math.random() * i);
            try {
                console.log(mthPQ[i].questions);
                console.log("A     " + mthPQ[i].options[0]);
                console.log("B     " + mthPQ[i].options[1]);
                console.log("C     " + mthPQ[i].options[2]);
                console.log("D     " + mthPQ[i].options[3]);
                // console.log("E     " + mthPQ[i].options[4]);

                j++;
                span.innerHTML += `<ul class="mthQuestions firstQ">
                    <li> ${j}. ${mthPQ[x].question} </li>
                    <label class="qLabel"> A </label><li> ${mthPQ[x].checks[0]} ${mthPQ[x].options[0]} </li>
                    <label class="qLabel"> B </label><li> ${mthPQ[x].checks[1]} ${mthPQ[x].options[1]}</li>
                    <label class="qLabel"> C </label><li> ${mthPQ[x].checks[2]} ${mthPQ[x].options[2]}</li>
                    <label class="qLabel"> D </label><li> ${mthPQ[x].checks[3]} ${mthPQ[x].options[3]}</li>
                    </ul>`;

            } catch (err) {
                console.log(err + " is the mistake here");
            }
        }
    }

    public_method_retake_examination() {
        modalContainer.style.display = "none";
    }

    public_method_gotocourses() {
        modalContainer.style.display = "none";
        sectionMth101.style.display = "none";
        firstSemester.style.display = "block";

    }

    public_method_displaymth101Result() {
        modalContainer.style.display = "block";
    }
}

var examination = new exams();
window.addEventListener('load', examination.public_method_fetchQuestions, false);
retakeExamBtn.addEventListener('click', () => {
    examination.public_method_retake_examination();
}, false);

submitMthBtn.addEventListener('click', examination.public_method_displaymth101Result, false);
goToCourses.addEventListener('click', examination.public_method_gotocourses, false);