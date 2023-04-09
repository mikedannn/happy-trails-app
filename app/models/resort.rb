class Resort < ApplicationRecord

    has_many :trails
    has_many :user_trails, through: :trails
    has_many :users, through: :user_trails
end
