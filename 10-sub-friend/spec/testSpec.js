describe("10 substring friendly", function() {
    it('"0" is not 10-substring-friendly', function() {
        expect(getTenSubstrFriendly('"0"')).toEqual([]);
    });
    it('"91" is 10-substring-friendly', function() {
        expect(getTenSubstrFriendly('"91"')).toEqual([91]);
    });

    it('"ACD42" is not 10-substring-friendly', function() {
        expect(getTenSubstrFriendly('"ACD42"')).toEqual([]);
    });
    it('find 10-substring-friendly number in 0-100, should be [19, 28, 37, 46, 55, 64, 73, 82, 91]', function() {
        expect(getTenSubstrFriendly('100')).toEqual([19, 28, 37, 46, 55, 64, 73, 82, 91]);
    });
    it('"3523014" is 10-substring-friendly', function() {
        expect(getTenSubstrFriendly('"3523014"')).toEqual([3523014]);
    });
    it('"28546" is not 10-substring-friendly', function() {
        expect(getTenSubstrFriendly('"28546"')).toEqual([]);
    });

});
