class Trail < ApplicationRecord

    belongs_to :resort
    has_many :user_trails
    has_many :users, through: :user_trails
end
