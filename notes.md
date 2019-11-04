* [Seven-segment display](https://en.wikipedia.org/wiki/Seven-segment_display)
* the pipes and underscores are the "segments"
* the scanned lines have 3x3 characters for each number, can be space, pipe, or underscore: 3**9 combinations if we allow all characters in each position
* the seven segment display restricts this to 2**7:
    * ignore (0, 0) and (0, 2)
    * (0, 1), (1, 1), (2, 1) can only be space or underscore
    * (1, 0), (1, 2), (2, 0), (2, 2) can only be space or pipe
* data representation options
    * just use the strings
    * somehow represent the 7 segments as booleans
        * array
        * binary map
        * object properties
* ideas for User Story 4 ("adding or removing just one pipe or underscore")
    * pre-process a hashmap, possibly two
    * take each valid digit and generate the strings resulting from the addition/removal of one segment
    * use the resulting string as the key, where the value is a list of the valid digits that can generate that string. this will allow easy/fast retrieval of the possible digits for ? characters
    * do we need the reverse hashmap? (where the key is the original character and the value is a list of the misprints)