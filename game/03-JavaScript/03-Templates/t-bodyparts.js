/** ?vulva - Returns one of many varieties of terms each referring to
 * 			 female genitals. */
Template.add('vulva', function () {
	T.trResult = either("외음부", "음부", "보지 테두리", "보지"); getPostNum(T.trResult); return T.trResult;});

Template.add('Vulva',function () {
	T.trResult = either("외음부", "음부", "보지 테두리", "보지"); getPostNum(T.trResult); return T.trResult;});
