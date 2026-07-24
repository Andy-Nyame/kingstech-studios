alter table public.reviews
add column if not exists is_featured boolean not null default false;

create unique index if not exists reviews_one_featured_review
on public.reviews (is_featured)
where is_featured = true;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'reviews_featured_must_be_approved'
  ) then
    alter table public.reviews
    add constraint reviews_featured_must_be_approved
    check (is_featured = false or status = 'approved');
  end if;
end $$;
