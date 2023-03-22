class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :email, presence: true, uniqueness: true
    validates :role, presence: true

    # has_many: user_trails
    # has_many: trails, through: :user_trails
    # has_many: resorts, through: :trails
end
