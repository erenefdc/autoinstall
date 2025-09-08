
"use client";

import useSWR from "swr";
import Image from "next/image";

type LanyardResponse = {
  success: boolean;
  data?: {
    discord_user: {
      id: string;
      username: string;
      global_name?: string;
      avatar?: string | null;
      discriminator?: string;
    };
    discord_status: "online" | "idle" | "dnd" | "offline";
    activities: Array<any>;
    listening_to_spotify: boolean;
    spotify?: {
      track_id: string;
      artist: string;
      song: string;
      album_art_url: string;
    };
  };
};

const fetcher = (url: string) => fetch(url).then(r => r.json());

function Avatar({ id, avatar, size=48 }:{ id?: string; avatar?: string | null; size?: number }) {
  const url = avatar && id
    ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=256`
    : "/avatar.svg";
  return <Image src={url} alt="Avatar" width={size} height={size} className="rounded-xl" />;
}

export default function DiscordPresence({ userId }: { userId: string }) {
  const { data, error, isLoading } = useSWR<LanyardResponse>(`/api/lanyard?userId=${userId}`, fetcher, { refreshInterval: 15000 });

  if (error) return <div className="text-red-500 text-sm">Failed to load Discord presence.</div>;
  if (isLoading || !data) return <div className="text-sm text-gray-500">Loading Discord presence…</div>;
  if (!data.success || !data.data) return <div className="text-sm text-gray-500">Presence unavailable.</div>;

  const d = data.data;
  const name = d.discord_user.global_name || d.discord_user.username;
  const statusColor = {
    online: "bg-emerald-500",
    idle: "bg-amber-500",
    dnd: "bg-rose-500",
    offline: "bg-gray-400"
  }[d.discord_status];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar id={d.discord_user.id} avatar={d.discord_user.avatar} size={48} />
          <span className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-900 ${statusColor}`} />
        </div>
        <div>
          <div className="font-medium leading-tight">{name}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{d.discord_status}</div>
        </div>
      </div>

      {d.listening_to_spotify && d.spotify ? (
        <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <Image src={d.spotify.album_art_url} alt="Album art" width={44} height={44} className="rounded" />
          <div className="text-sm">
            <div className="font-medium">Listening on Spotify</div>
            <div className="opacity-80">{d.spotify.song} — {d.spotify.artist}</div>
          </div>
        </div>
      ) : d.activities && d.activities.length > 0 ? (
        <div className="text-sm p-3 rounded-xl border border-black/5 dark:border-white/10">
          <div className="font-medium">Activity</div>
          <div className="opacity-80">{d.activities[0].name}</div>
        </div>
      ) : (
        <div className="text-sm p-3 rounded-xl border border-black/5 dark:border-white/10 opacity-80">
          Chilling offline 😴
        </div>
      )}
    </div>
  );
}
