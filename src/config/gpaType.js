export const gpa =
[
    {value:0, content: "GPA Type"},
    {value:1, content: 4},
    {value:2, content: 5},
    {value:3, content: 100},
    {value:4, content: 6},
    {value:5, content: 7},
    {value:6, content: 9},
    {value:7, content: 4.3},
    {value:8, content: 4.33},
    {value:9, content: 4.5},
    {value:10, content: 10},
    {value:11, content: 12},
    {value:12, content: 20},
]


export const findGpaType = value =>{
        var x
        for (x of gpa) {
            if (x.value === value) return x.content;

        }
        return 0

}