<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Class Server
 * 
 * @property int $id
 * @property int $role_id
 * @property string|null $email
 * @property string|null $identification_number
 * @property string|null $name
 * @property string|null $password
 * @property int $server_status_id
 * 
 * @property Role $role
 * @property ServerStatus $server_status
 * @property Collection|Historic[] $historics
 *
 * @package App\Models
 */
class Server extends Authenticatable implements JWTSubject
{
	use Notifiable;

	protected $table = 'server';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id' => 'int',
		'role_id' => 'int',
		'server_status_id' => 'int'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'role_id',
		'email',
		'identification_number',
		'name',
		'password',
		'server_status_id'
	];

	public function role()
	{
		return $this->belongsTo(Role::class);
	}

	public function server_status()
	{
		return $this->belongsTo(ServerStatus::class);
	}

	public function historics()
	{
		return $this->hasMany(Historic::class);
	}


	/**
	 * Get the identifier that will be stored in the subject claim of the JWT.
	 *
	 * @return mixed
	 */
	public function getJWTIdentifier()
	{
		return $this->getKey();
	}

	/**
	 * Return a key value array, containing any custom claims to be added to the JWT.
	 *
	 * @return array
	 */
	public function getJWTCustomClaims()
	{
		return [];
	}
}
