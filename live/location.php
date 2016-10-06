<?php
    
define('FILE', '/tmp/data.txt');
    
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = array_merge(array(
        'lat'      => 42.291707,
        'lng'      => -85.587229,
        'speed'    => 0,
        'weather'  => 'Sunny',
        'temp'     => 0,
        'location' => 'Kalamazoo, MI, USA',
        'time'     => 0
    ), $_POST);
    
    $data['weather'] = ucwords($data['weather']);
    
    file_put_contents(FILE, json_encode($data));
} else {
    print file_get_contents(FILE);
}
