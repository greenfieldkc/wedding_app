class Guest < ActiveRecord::Base
  has_many :comments
  before_save {self.email = email.downcase }
  validates :last_name, presence: true
  validates :first_name, presence: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: {case_sensitive: false }
  validates :num_attending, presence: true
  #validates_inclusion_of :password, :in => "maddie"
end
