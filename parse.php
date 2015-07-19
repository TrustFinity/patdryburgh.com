<?php
$file_str = file_get_contents('ee_posts.txt');

$split = explode("<!-- end of post -->", $file_str);

foreach($split as $post_str) {

        $post_str = trim($post_str);

        if ($post_str) {
                // get the yaml data out
                $post_pieces = explode('---', $post_str);
                $yaml = trim($post_pieces[1]);
                $yaml_lines = explode("\n", $yaml);
                foreach ($yaml_lines as $line) {
                        if (preg_match("/^date:\s?(\d\d\d\d-\d\d-\d\d)$/i", $line, $matches)) {
                                print_r($matches);
                                $date = $matches[1];
                        }
                        if (preg_match("/^url_title:\s?([A-Za-z0-9_-]+)$/i", $line, $matches)) {
                                print_r($matches);
                                $slug = $matches[1];
                        }
                }
                // write file
                file_put_contents("blog/_posts/{$date}-{$slug}.md", $post_str);
        }
}
?>