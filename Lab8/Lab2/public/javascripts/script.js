/**
 * Created by Hatake on 7/6/2017.
 */

$(function () {
    $('.editBtn').click(function (event) {
        const loc = JSON.parse(this.name);
        $('#edit-id').val(loc._id);
        $('#edit-name').val(loc.name);
        $('#edit-category').val(loc.Category);
        $('#edit-longitude').val(loc.coords[0]);
        $('#edit-latitude').val(loc.coords[1]);
    });
});