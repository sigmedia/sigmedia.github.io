# The website of the TCD SIGMEDIA group

This repository contains the source for the website of the TCD SIGMEDIA group.

## Overview

The SIGMEDIA website is hosted on GitHub and is based on Jekyll (with some additional tweaks which are not important here).
Because of this, it is important to understand the mechanisms of **git** and the workflow of **GitHub** before modifying the website.

In order to update the website, we have two possibilities:
doing it directly on GitHub or doing it offline and propagating the changes on Github.
This tutorial is structured in three phases:

-   Explaining the strategy briefly behind the edition of the website;
-   Preparing the environment to update the website offline;
-   Updating the website.

The second part should be informative for both online and offline modifications.


## Edition strategy

In order to simplify the management of the website, we distinguished two roles:

-   **administrators:** people who have the permission to modify the repository of the SIGMEDIA website
-   **default users:** people who do not have these permissions

In order to modify the website, default users will have to fork the repository, do their modification and open a pull request.
Then, this pull request will be considered by an administrator.


## Preparing the environment

In this part, we will assume the following tokens:

-   **`<sigmedia_url>`:** the GitHub repository URL (either the main repository or your fork depending on your role and your workflow);
-   **`<rep_dir>`:** the local directory where the sigmedia repository is.


### Linux / MacOS (adapted from <https://jekyllrb.com/docs/>)

Here is the process to configure jekyll locally:

1.  Install the prerequisites (see <https://jekyllrb.com/docs/installation/>)
2.  Clone the repository: `git clone <sigmedia_url> <rep_dir>`
3.  Position yourself in the directory: `cd <rep_dir>`
4.  Install jekyll and bundler: `gem install jekyll bundler`
5.  Install the bundles: `bundle install`
6.  Launch the server: `bundle exec jekyll serve`
7.  Browse to <http://localhost:4000>

Steps 1 to 5 should only be done once.
You do not need to relaunch the server when after modifying the content.
Jekyll will generate the website at each (saved) modification.


### Windows

<div class="warning" id="org6bc9a0e">
<p>
THIS HAS NOT BEEN TESTED!!!!
</p>

</div>

Here is the process to configure jekyll locally:

1.  Install jekyll using the instructions from <https://jekyllrb.com/docs/installation/windows/>
2.  Clone `<sigmedia_url>` to `<rep_dir>` using your favorite git client
3.  Open a terminal and position yourself in `<rep_dir>`
4.  Install the bundles: `bundle install`
5.  Launch the server: `bundle exec jekyll serve`
6.  Browse to <http://localhost:4000>

Steps 1 to 4 should only be done once.
You do not need to relaunch the server when after modifying the content.
Jekyll will generate the website at each (saved) modification.


## Adding a new information

### Adding a new member

To add a new member, you have to create a markdown file in the directory
`_members/team`.

This file should respect the following template:

    ---
    layout: member
    category: <pos>
    title: <name>
    date: <join-date>
    image: <username.xx>
    role: <position>
    permalink: 'team/username'
    social:
        [twitter]: <url>
        [linkedin]: <url>
        [google-scholar]: <url>
        [github]: <url>
        [website]: <url>
        email: <mail>
        [orcid]: <url>
    ---
    <biography>

Here is the description of each item:

-   **category:** The position among the following values: 'staff', 'Postdoc',
    'Research-Assistant', 'PhD-Student', 'others', 'alumni'
-   **title**: Name of the person
-   **date**: Join date of the person in the format 'YYYY-MM-DD'
-   **image**: Image filename of the person, it should be stored in
    `assets/images/team/$userid` with proper extension(.jpg/.png)
-   **role**:  Role to be displayed on the Website, typically it is a post the person holds
-   **permalink**: path to the page to be rendered, usually, it is `team/$username`.
-   **social**: Add related URLs to social profiles
-   email: The email of the person.

Each item in the header between square brackets is optional and the order
doesn't matter. But it is recommended to have them if you have an online presence.


### Adding a new job offer

Nothing yet here because I don't yet what is important for a job offer :D

### Adding a new blog post

For the creation of a new blog post, you can create a new file in `_posts` with date
being in the filename followed by the name.

A blog markdown file requires to be in a specific format,

    ---
    layout: post
    title: <name>
    categories: <name>
    tags: <tag values separated by commas>
    ---

This will be rendered as a normal markdown file, where it will be sorted by the date of the file.
The images for the blog posts are to be kept in `assets/images/posts/`
if there are multiple images, it is advised to create a folder for the post and
have it inside.

> Note: In the previous edition of the website, this was set as News, in this
> 2022 edition, we have rebranded News to blog.
### Adding a new reference

To add a new reference, you need to update the file `publis/<year>.bib` where `<year>` corresponds to year the of the publication to add.
If the file doesn't exist, you can create it.

If the bibtex source for the desiginated `<year>` is not found, then you should
create an entry of `<bibtex src="{{ site.url }}/publis/<year>.bib"></bibtex>` in
`bib_format.html` inside `_includes`.

#### Global formatting

In order to have the most homogeneous format, please use `bibtex-tidy`.
You have an online version for it at this address: <https://flamingtempura.github.io/bibtex-tidy/>

The configuration is based on the following command:

    bibtex-tidy \
        --curly --numeric --space=4 --align=13 \
        --duplicates=key,doi --no-escape \
        --sort-fields=title,shorttitle,author,year,month,day,journal,booktitle,location,on,publisher,address,series,volume,number,pages,doi,isbn,issn,url,urldate,copyright,category,note,metadata \
        --trailing-commas \
        --no-remove-dupe-fields \
        YOUR_FILE.bib

Finally, for an easier search, the bibtex file is sorted based on the keys of bibtex entries.

#### Key formatting

The format of the key associated with the bibtex entry is the following: `<first_author_last_name>_<year>_<counter>`.
The counter is incremented in order to avoid duplicate keys which are associated with the same (first) author.

## Updating/Removing information

To update or remove information, simply update or delete the markdown file associated

## Template Information

This website is using [Bootstrap](https://getbootstrap.com/) adapted from
[RT2Lab template](https://github.com/rt2lab/rt2lab.github.io).