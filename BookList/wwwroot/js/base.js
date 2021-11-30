function ConfirmDeletion(title, text, icon, url, tableId) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        dangerMode: true,
        showCancelButton: true
    }).then((willDelete) => {
        if (willDelete.isConfirmed) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        $('#' + tableId + '').DataTable().ajax.reload();
                    }
                    else {
                        toastr.error(data.message);
                    }
                }

            });
        }
    });
}