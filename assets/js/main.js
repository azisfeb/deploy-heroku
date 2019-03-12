$(document).ready(function(){
    $('#table-user').DataTable({
        fnInitComplete: function(){
            $('#btn-wrap').html('<a href="/backend/user/create" class="btn btn-primary btn-sm btn-new">new</a>');
        }
    });
});