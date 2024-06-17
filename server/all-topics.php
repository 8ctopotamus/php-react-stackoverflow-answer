<?php

header('Access-Control-Allow-Origin: *'); // normally you'd restrict this to your client's domain
header('Content-Type: application/json; charset=utf-8'); // script should send back JSON

// Query the DB for topic data pseudo-code
// $conn = mysqli_connect("localhost", "root", "", "forum_topics") or die(mysqli_error());
// $sql = "SELECT * FROM topics ";
// $result = mysqli->query($conn, $sql);
// $topics = $result->fetch_all(MYSQLI_ASSOC);

// for now I'll just hard-code some topics...
$topics = [
  [
    'id'           => 1,
    'title'        => 'Topic 1',
    'slug'         => 'topic-1',
    'topic_post'   => 'This is topic 1',
    'topic_photo'  => 'https://placehold.co/600x400',
  ],
  [
    'id'           => 2,
    'title'        => 'Topic 2',
    'slug'         => 'topic-2',
    'topic_post'   => 'This is topic 2',
    'topic_photo'  => 'https://placehold.co/600x400',
  ],
  [
    'id'           => 3,
    'title'        => 'Topic 3',
    'slug'         => 'topic-3',
    'topic_post'   => 'This is topic 3',
    'topic_photo'  => 'https://placehold.co/600x400',
  ],
];

echo json_encode($topics);
exit;