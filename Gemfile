source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'jekyll-coffeescript'
gem 'kramdown', versions['kramdown']
gem 'jekyll-watch'
gem 'jekyll-paginate'
gem 'rake'