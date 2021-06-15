/*
Given two arrays of strings a1 and a2 return a sorted array r in
 lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/
function inArray(a1, a2) {
    var returnArray = [];
    for (var _i = 0, a1_1 = a1; _i < a1_1.length; _i++) {
        var elem1 = a1_1[_i];
        for (var _a = 0, a2_1 = a2; _a < a2_1.length; _a++) {
            var elem2 = a2_1[_a];
            if (elem2.indexOf(elem1) != -1) {
                returnArray.push(elem1);
                break;
            }
        }
    }
    return returnArray.sort();
}
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
