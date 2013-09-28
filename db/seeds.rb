# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

group :production do
  guest = Guest.create last_name: 'Sample', first_name: 'Joe', email: 'joe@sample.com', num_attending: 2
  comment = Comment.create guest_id: 1, message: 'This is a sample guest book message.', email: 'joe@sample.com'
end