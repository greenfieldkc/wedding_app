class Comment < ActiveRecord::Base
  belongs_to :guest
  validates :message, presence: true
end
