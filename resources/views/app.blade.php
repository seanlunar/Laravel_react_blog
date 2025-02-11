<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1E40AF', // Custom color
                    }
                }
            }
        };
    </script>
    @vite('resources/css/app.css')
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    @routes

</head>
<body>
    @inertia
</body>
</html>
